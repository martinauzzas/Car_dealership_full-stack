import React from 'react';
import '../../style.css';
import { makeStyles } from '@material-ui/core';
import '../../style.css'
import { Navbar } from '../../components/Navbar';
import Grid from '@mui/material/Grid';
import photo1 from '../../assets/images/mountain_car_middle.jpg';
import map from '../../assets/images/map1.png';
import iceland1 from '../../assets/images/iceland_car_still.jpg';
import iceland2 from '../../assets/images/iceland_car_man.jpg';
import desert1 from '../../assets/images/desert_car_back.jpg';
import desert2 from '../../assets/images/desert_car_fast.jpg';
import desert3 from '../../assets/images/desert_car_sunset.jpg';
import mountain1 from '../../assets/images/mountain_car_back.jpg';
import mountain2 from '../../assets/images/mountain_car_left.jpg';
import mountain3 from '../../assets/images/mountain_car_middle.jpg';

// UNIFY THE TWO CONST TO MAKE ONLY ONE
const useStyle = makeStyles ({
    marginGrid: {
        marginTop: '100px',
        marginLeft: '50px',
        marginRight: '20px'
    },
    photo1: {
        width: '70%',
        heigth: '70%',
        marginLeft: '70px',
        marginTop: '60px',
    },
    map: {
        width: '70%',
        display: 'block',
        marginInline: 'auto'
    },
    text: {
        fontSize: '30px',
        marginTop: '40px'
    },
    title: {
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '10px',
        fontSize: '30px'
    },
    marginLeft: {
        marginLeft: '70px'
    },
    marginPage: {
        marginLeft: '60px',
        marginRight: '40px',
    },
    textPlaces: {
        textAlign: 'center',
        fontSize: '30px',
        margin: '10px',
        marginTop: '40px'
    },
    displayPhotosIceland: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center'
    },
    displayPhotosDubai: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        marginLeft: '60px'
    },
    display2Dubai: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
        marginLeft: '100px'
    },
    photoMountain: {
        display : 'grid',
        justifyItems: 'center'
    }
})

// container rowSpacing = Space between the two rows (margin top)
// container columnSpacing = Space between the two clomuns (both margin y and x)


export const About = () => {
    const classes = useStyle();
    return (
        <>
            <Navbar />
            <div>
                <h1 className={`${classes.title}`}>ABOUT US</h1>
                <Grid container spacing= {4}>
                    <Grid xs={7}>
                        <img 
                        src={photo1} 
                        alt = "car something"
                        className = {`${classes.photo1}`} 
                        />
                    </Grid>

                    <Grid xs= {3} className={`${classes.marginGrid}`}>
                        <h3 className = {`${classes.text}`}>DRIVE OUR CARS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, explicabo!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tempora.
                        </p>
                    </Grid>
                </Grid>

                {/* WHERE TO FIND US */}
                <h2 className={`${classes.title}`}>WHERE TO FIND US</h2>
                <img
                    src = {map}
                    alt = ""
                    className = {`${classes.map}`} />
                {/* ICELAND */}

                <div>
                    <h3 className={`${classes.textPlaces}`}>ICELAND</h3>
                    <Grid className = {`${classes.displayPhotosIceland}`}> 
                        <Grid xs= {6}>
                            <img
                            src = {iceland2}
                            alt = ""
                            style = {{ width : '62%', marginInline: '70px'}}/>
                        </Grid>
                        <Grid xs={6}>
                            <img
                            src= {iceland1}
                            alt= ""
                            style = {{ width : '77%', marginInline: '70px'}}/>
                        </Grid>
                    </Grid>
                </div>

                {/* DUBAI */}
                <div>
                    <h3 className={`${classes.textPlaces}`} >DUBAI</h3>
                    <Grid className = {`${classes.displayPhotosDubai}`}>
                        <Grid xs = {6}>
                        <img
                            src= {desert2}
                            alt = ""
                            style = {{ width: '100%', marginInline: '70px'}}
                            className = {`${classes.map}`}/>
                        </Grid>
                        <Grid xs = {6}className = {classes.display2Dubai}>
                        <img
                            src= {desert3}
                            alt = ""
                            style = {{ width: '60%'}}
                            className = {`${classes.map}`}/>
                        <img
                            src= {desert1}
                            alt = ""
                            style = {{ width: '60%' }}
                            className = {`${classes.map}`}/>
                        </Grid>
                    </Grid>
                </div>

                {/* MOUNTAINS  */}
                <div className = {classes.photoMountain}>
                <h3 className={`${classes.textPlaces}`}>COLORADO</h3>
                    <img src={mountain1} alt="" style = {{ width : '40%'}} />
                    <img src={mountain2} alt = "" style = {{ width : '40%', marginTop: '20px'}} />

                </div>

            </div>

            
        </>
    )
}


// POLYGON FOR DIAGONAL PHOTO: style = {{clipPath: "polygon(0% 0%, 100% 0%, 60% 100%, 0% 100%)"}}