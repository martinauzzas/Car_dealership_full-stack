import React, { useState } from 'react'
import firebase from 'firebase/app';
import { useAuth, AuthCheck, useSigninCheck } from 'reactfire';
import 'firebase/auth';
import { Input } from '../SharedComponents/Input';
import { Container, Button, makeStyles, Typography, Snackbar,  } from '@material-ui/core';
import { RouteComponentProps, withRouter } from "react-router-dom";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Navbar } from '../../components';

const Alert = (props:AlertProps) => {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}


const useStyles = makeStyles({
    background: {
        backgroundColor: '#02002a'
    },
    googleButton:{
        backgroundColor: 'rgb(66,133,244)',
        marginTop: '2em',
        padding: '0',
        color: 'white',
        height: '50px',
        width: '240px',
        border: 'none',
        textAlign: 'center',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
        fontSize: '16px',
        lineHeight: '48px',
        display: 'block',
        borderRadius: '1px',
        fontFamily: 'Roboto, arial, sans-serif',
        cursor: 'pointer'
    },
    googleLogo:{
        width: '48px',
        height: '48px',
        display: 'block'
    },
    typographyStyle: {
        textAlign: 'center',
        fontSize: '2em'
    },
    containerStyle: {
        marginTop: '2em'
    },
    snackBar: {
        color: 'white',
        backgroundColor: '#4caf50'
    },
    label: {
        color: 'white',
        backgroundColor: '#a2a2bd',
        padding: '5px',
        borderRadius: '5px'
    }
});

interface SignInProps{
    history: RouteComponentProps["history"];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
  }

export const SignIn = withRouter( (props:SignInProps) => {

    const auth = useAuth();
    const classes = useStyles();
    const { history } = props;
    const [open, setOpen] = useState(false);

    const handleSnackOpen = () => {
        setOpen(true)
    };

    const handleSnackClose = (event?: React.SyntheticEvent, reason?:string) => {
        if(reason === 'clickaway'){
            return;
        }

        setOpen(false);
        history.push('/dashboard')
    }

    const sign_in = async () => {
        const response = await auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
        if(response.user){
            handleSnackOpen();
        }
    };

    const sign_out = async () => {
        await auth.signOut();
    }

    return (
        <div className={classes.background}>
            <Navbar />
            <Container maxWidth = 'sm' className={classes.containerStyle}>
                <Typography className={classes.typographyStyle}>Sign In Below</Typography>
                <form>
                    <div className={classes.label}>
                        <label className={classes.label} htmlFor="email">Email</label>
                        <Input name="email" placeholder="Place Email Here" />
                    </div>
                    <div className={classes.label}>
                        <label className={classes.label} htmlFor="password">Password</label>
                        <Input name="password" placeholder="Place Password Here" />
                    </div>
                    <Button type="submit" variant='contained' color='primary'>Submit</Button>
                </form>

                <AuthCheck fallback={
                    <Button className={classes.googleButton} onClick={sign_in}>Sign In With Google</Button>
                }>
                </AuthCheck>
                <Snackbar message={'Success'} open={open} autoHideDuration={6000} onClose={handleSnackClose}>
                    <Alert onClose={handleSnackClose} severity="success">
                        Successful Sign In - Redirect in 6 seconds
                    </Alert>
                </Snackbar>
            </Container>
        </div>
    )
});