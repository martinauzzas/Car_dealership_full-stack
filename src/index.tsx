import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About, SignIn, CarDealership } from './components';
import './style.css';
import { firebaseConfig } from './firebaseConfig';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store'; 
import { Cars } from './components/Cars'

const temp_props = "Car Dealership"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={ firebaseConfig } suspense = { true }>
        <Provider store = { store }>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home title= { temp_props }/>
                    </Route>

                    <Route path="/cars">
                        <Cars></Cars>
                    </Route>

                    <Route path="/dashboard">
                        <CarDealership></CarDealership>
                    </Route>

                    <Route path="/about">
                        <About></About> 
                    </Route>

                    <Route path="/signin">
                        <SignIn></SignIn>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


