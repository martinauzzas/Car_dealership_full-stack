import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import { AuthCheck } from 'reactfire';
import '../../style.css';

const useStyles = makeStyles({
  navbar: {
    height: '75px',
    backgroundColor: '#03002a'
  },
  logo: {
    content: `url(${Logo})`,
    maxWidth: '20%',
    marginLeft: '10px'
  },
  navLogo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: { 
    display: 'flex',
    flexDirection :'row'
  },
  width100: {
    width: '100%'
  },
  navbarItem: {
    listStyleType:'none',
    color: '#a2a2bd',
    textDecoration: 'none',
    marginTop: '15px',
    marginLeft: '24px',
    marginRight: '20px'
  },
  navbarLink: {
    textDecoration: 'none'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  alignCenter: {
    alignItems: 'center'
  }
})


export const Navbar = () => {
  const classes = useStyles();

    return (
      <div>
          <div className ={`${classes.row} ${classes.width100} ${classes.navbar} ${classes.spaceBetween}`} >
              <Link to = "./" className={`${classes.logo} ${classes.navLogo}`}></Link>
                  <ul className={`${classes.row} `}>
                    <Suspense fallback = { 'loading...'}>
                        <AuthCheck fallback = {
                            <><li className={`${classes.navbarItem}`}>
                  <Button className={`${classes.navbarItem}`}>
                    <Link to='./signin' className={`${classes.navbarLink}`}>SIGN IN</Link>
                  </Button>
                </li><li className={`${classes.navbarItem}`}>
                    <Button className={`${classes.navbarItem}`}>
                      <Link to='./about' className={`${classes.navbarLink}`}>ABOUT US</Link>
                    </Button>
                  </li><li className={`${classes.navbarItem}`}>
                    <Button className={`${classes.navbarItem}`}>
                      <Link to='./cars' className={`${classes.navbarLink}`}>OUR CARS</Link>
                    </Button>
                  </li></>
                            }> 
                            <li className ={`${classes.navbarItem}`}>
                                <Button className ={`${classes.navbarItem}`} >
                                    <Link to ='./dashboard' className={`${classes.navbarLink}`}>DASHBOARD</Link> 
                                </Button> 
                            </li>
                          
                        </AuthCheck>
                    </Suspense>
                  </ul>
          </div>
      </div>
    )
  }

  