import React, { useState }from 'react';
import '../../style.css';
import { useGetData } from '../../custom-hooks';
import { Link, Redirect } from 'react-router-dom';
import { Drawer as MUIDrawer, 
    ListItem, 
    List, 
    ListItemIcon, 
    ListItemText, 
    Theme,
    useTheme, 
    makeStyles, 
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    Dialog, 
    DialogActions, 
    DialogContent,
    DialogContentText, 
    DialogTitle 
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route } from "react-router-dom";
import { DataTable } from '../../components/DataTable';
import { ContactForm } from '../ContactForm';
import { AuthCheck, useAuth } from "reactfire";


interface CarDealershipProps{
    history: RouteComponentProps["history"];
    location: RouteComponentProps["location"];
    match: RouteComponentProps["match"]
}

const drawerWidth = 240;

// TO DO, STYLES FOR PAGE
const useStyles = makeStyles((theme: Theme) => createStyles({
    background: {
        backgroundImage: `linear-gradient(rgba(2,0,42,1) 0%, rgba(9,121,120,1) 32%, rgba(138,220,224,1) 100%);`,
        width: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
        height: '100%'
    },
    h3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        backgroundColor: 'white',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_a: {
        color: '#4ef3b4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none',
    },
    root: {
      display: 'flex',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    toolbar:{
      display: 'flex',
      backgroundColor: '#003155',
      color: 'white',
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    toolbar_button: {
      marginLeft: 'auto',
      color: 'white',
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    margin_top: {
        marginTop: '50px',
    },
    font: {
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    leftMargin: {
        marginLeft: '240px',
    },
}));

// CHECK OUT WHAT ALL THE CONST DO
export const CarDealership = withRouter (( props:CarDealershipProps ) => {
    const auth = useAuth();
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [ open, setOpen ] = useState(false);

    const [ dialogOpen, setDialogOpen ] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false)
    };

    const handleDialogClickOpen = () => {
        setDialogOpen(true)
    };

    const handleDialogClickClose = () => {
        setDialogOpen(false)
    };

    // ITEM IN THE LIST IN THE DRAWER
    const itemList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
        },
        {
            text: 'Sign In',
            onClick: () => history.push('/signin')
        },
        {
            text: 'About',
            onClick: () => history.push('/about')
        },
        {
            text: 'Our Cars',
            onClick: () => history.push('/cars')
        }
    ]

    const sign_out = async () => {
        await auth.signOut();
        
    }
    
    return (
        <div className={`${classes.root} ${classes.column} ${classes.background}`}>
            <CssBaseline /> 
            <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open })}> 
                <Toolbar className={classes.toolbar}>
                    <IconButton color="inherit" aria-label="open-drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.font} noWrap>
                        CAR DEALERSHIP DATABASE
                    </Typography>
                    <Button className={classes.toolbar_button} onClick={handleDialogClickOpen}>Add New Car</Button>

                    {/* Dialog Pop Up */}
                    <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Add New Car</DialogTitle>
                        <DialogContent>
                            <DialogContentText></DialogContentText>
                            <ContactForm />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClickClose} color="primary">Cancel</Button>
                        </DialogActions>
                    </Dialog>
                    {/* End dialog pop-up */}
                </Toolbar>
            </AppBar>
            <MUIDrawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper,}}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider /> {/* A fun educational game is to comment elements out while the compiler is running and see what disappears or breaks */}
                <List>
                    {itemList.map((item, index) => { 
                        const { text, onClick } = item;
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}
                </List>
            </MUIDrawer>
            <main className={`${clsx(classes.content, {[classes.contentShift]: open,})} ${classes.leftMargin}`}>
                <div className={classes.drawerHeader} />
                    <DataTable />
            </main>
            <Button onClick = {sign_out}>
                <Link to ='./'>LOG OUT</Link> 
            </Button>
        </div>
    )
});
