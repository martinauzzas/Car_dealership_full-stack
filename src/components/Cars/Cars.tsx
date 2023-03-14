import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { makeStyles } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import '../../style.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import jeep2 from '../../assets/images/jeep2.jpg';
import jeep3 from '../../assets/images/jeep3.jpg';
import jeep4 from '../../assets/images/jeep4.jpg';
import jeep5 from '../../assets/images/jeep5.jpg';
import jeep6 from '../../assets/images/jeep6.jpg';
import range from '../../assets/images/range2.jpg'


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const useStyles = makeStyles ({
    background: {
        backgroundImage: `linear-gradient(rgba(2,0,42,1) 0%, rgba(9,121,120,1) 32%, rgba(138,220,224,1) 100%);`,
        width: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1
    },
    title: {
        color: 'white',
        textAlign: 'center',
        margin: '20px',
        marginTop: '30px'
    },
    columnRigth: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'end',
        alignItems: 'center',
        margin: '0px'
    },
    columnLeft: {
        color: 'grey',
        marginBottom: '0px',
        border: '10px'
    },
    card: {
        marginTop: '60px',
        marginInline: '50px'
    },
    marginText: {
        margin: '0px'
    },
    root: {
        boxShadow: `0px 2px 1px -1px rgb(0 0 0 / 20%), -19px -20px 20px 11px rgb(74 64 114 / 14%), -19px -20px 20px 11px rgb(0 0 0 / 12%)`
    }

});

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export const Cars = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
      
    const classes = useStyles();

    return (
    <div>
        <Navbar />

        <h1>OUR CARS</h1>

        {/* 1ST ROW*/}

        <Grid container spacing = {2}>
            <Grid xs={4} >
            <Card className = {`${classes.card}`}>
            <CardHeader
                title="Car"
            />
            <CardMedia
                component="img"
                height="194"
                image={jeep4}
                alt=""
            />
            <CardActions disableSpacing>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography className={`${classes.columnLeft}`}>Make:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    Something
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Model:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    Something
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Year:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    2023
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Infos:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    New Car
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Price:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    $$
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
            </Grid>

            <Grid xs = {4}>
            <Card className = {`${classes.card}`}>
            <CardHeader
                title="Car"
            />
            <CardMedia
                component="img"
                height="194"
                image={range}
                alt=""
            />
            <CardActions disableSpacing>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                style = {{ alignContent: 'center'}}
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography className={`${classes.columnLeft}`}>Make:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    Something
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Model:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    Something
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Year:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    2023
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Infos:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    New Car
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Price:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    $$
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
            </Grid>

            {/* CARD3 */}

            <Grid xs = {4}>
            <Card className = {`${classes.card}`}>
            <CardHeader
                title="Car"
            />
            <CardMedia
                component="img"
                height="194"
                image={jeep2}
                alt=""
            />
            <CardActions disableSpacing>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography className={`${classes.columnLeft}`}>Make:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    Something
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Model:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    Something
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Year:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    2023
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Infos:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    New Car
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Price:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    $$
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
            </Grid>
        </Grid>

                {/* 2ND ROW CARDS */}

                <Grid container spacing = {2}>
            <Grid xs={4} >
            <Card className = {`${classes.card}`}>
            <CardHeader
                title="Car"
            />
            <CardMedia
                component="img"
                height="194"
                image={jeep3}
                alt=""
            />
            <CardActions disableSpacing>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography className={`${classes.columnLeft}`}>Make:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    Something
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Model:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    Something
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Year:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    2023
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Infos:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    New Car
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Price:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    $$
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
            </Grid>

            <Grid xs = {4}>
            <Card className = {`${classes.card}`}>
            <CardHeader
                title="Car"
            />
            <CardMedia
                component="img"
                height="194"
                image={jeep5}
                alt=""
            />
            <CardActions disableSpacing>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                style = {{ alignContent: 'center'}}
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography className={`${classes.columnLeft}`}>Make:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    Something
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Model:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    Something
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Year:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    2023
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Infos:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    New Car
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Price:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    $$
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
            </Grid>

            {/* CARD3 */}

            <Grid xs = {4}>
            <Card className = {`${classes.card}`}>
            <CardHeader
                title="Car"
            />
            <CardMedia
                component="img"
                height="194"
                image={jeep6}
                alt=""
            />
            <CardActions disableSpacing>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography className={`${classes.columnLeft}`}>Make:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    Something
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Model:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    Something
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Year:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    2023
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Infos:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    New Car
                </Typography>
                <Typography className={`${classes.columnLeft}`}>Price:</Typography>
                <Typography className={`${classes.columnRigth}`}>
                    $$
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
            </Grid>
        </Grid>
    </div>

  );
}