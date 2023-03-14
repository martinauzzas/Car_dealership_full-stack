import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { display } from '@mui/system';
import { Navbar } from '../../components/Navbar';
import '../../style.css'
import PhotoRange1 from '../../assets/images/range_home.jpg';
import PhotoJeep1 from '../../assets/images/Jeep_home.jpg';
// import logo from '../../assets/images/';


// Establishing my props using Interface, passing the name with the type of data we want it to be (int/strings..)
interface Props{
    title: string
}

// Setting makeStyles to a const so we can use it easily
const useStyle = makeStyles ({
    background: {
        backgroundImage: `linear-gradient(rgba(2,0,42,1) 0%, rgba(9,121,120,1) 32%, rgba(138,220,224,1) 100%);`,
        width: '100%',
        height: '89%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1
    },
    header: {
        color: '#a2a2bd',
        margin : '30px',
        textAlign: 'center',
    },
    h3: {
        textAlign:'center',
        color: '#a2a2bd',
    },
    cardTitle: {
        textAlign: 'center'
    },
    photocard : {
        width: '80%'
    },
    card: {
        marginLeft : '50px',
        backgroundColor: '#a2a2bd',
        margin: '28px',
        width: '495px',
        height: '312px'
    },
    cardColor: {
        backgroundColor: '#a2a2bd'
    },
    displayCard: {
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center'
    }
    })

// Exporting the function passing the prop as the value (so we can use it)
// And writing the html using the useStyles and class.key
export const Home = ( props: Props ) => {
  const classes = useStyle();
  return (
    <> 
        <Navbar />
        <div className={`${classes.background}`}>
            <div className={`${classes.header}`}>
                <h1>CAR DEALERSHIP APP</h1>
            </div>
            <div className={`${classes.displayCard}`}>
                <Link to = "./about">
                <Card sx={{ maxWidth: 345 }} className={`${classes.card}`}>
                     <CardActionArea> {/* ABOUT US */}
                        <CardMedia className={`${classes.card}`} style = {{ margin: '0px', height: '200px' }}
                            component="img"
                            height="140"
                            image={PhotoRange1}
                            alt="tbd"
                        />
                    <CardContent className={`${classes.cardColor}`}>
                        <Typography gutterBottom variant="h5" component="div" className={`${classes.cardTitle}`}>
                            ABOUT US
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Recusandae, similique.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
                </Link>

                <Link to= "./cars">
                <Card sx={{ maxWidth: 345 }} className={`${classes.card}`}>
                    <CardActionArea> {/* OUR CARS */}
                        <CardMedia className={`${classes.card}`} style = {{ margin: '0px', height: '200px' }}
                        component="img"
                        height="140"
                        image={PhotoJeep1}
                        alt="tbd"
                        />
                    <CardContent className={`${classes.cardColor}`}>
                        <Typography gutterBottom variant="h5" component="div" className={`${classes.cardTitle}`}>
                            OUR CARS
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem, ipsum dolor sit amet 
                            consectetur adipisicing elit. Veritatis, sequi!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
            </div>
        </div>
    </>
  )
}
