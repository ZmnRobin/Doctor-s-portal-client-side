import React, { useContext } from 'react';
import Public from '../../images/Group 140.png'
import './login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig/firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

    let history=useHistory()  
    let location=useLocation()
    let { from } = location.state || { from: { pathname: '/'} };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          history.replace(from)
        //   storeAuthToken();
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
      
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 login'>
                    <div className='login-form'>
                    <h5 className='text-center mb-5'>Login</h5>
                    <input type="text" className="form-control mt-5" placeholder='Username' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    <input type="text" className="form-control mt-4" placeholder='Password' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                   <p className='mt-1 text-danger'>Forgot your password ?</p>
                   <button className='btn btn-success mt-3 '>Sign in</button> <button onClick={handleGoogleSignIn} className='btn btn-success mt-3' style={{float:'right'}}>Continue with google</button>
                   </div>
                </div>
                <div className='col-md-6'>
                    <img className='img-fluid' src={Public} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Login;