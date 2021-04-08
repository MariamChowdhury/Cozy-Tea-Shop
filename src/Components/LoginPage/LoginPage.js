import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const LoginPage = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext); 
  const history=useHistory  ();
  const location=useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleSignIn = () => {
    firebase.initializeApp(firebaseConfig);
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const {email,photoURL}=result.user;
       const signedInUser={email,photoURL};
       setLoggedInUser(signedInUser);
       history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="container my-5">
      <h1>You are not logged in!</h1>
      <Button onClick={handleSignIn} variant="danger">
        Google LogIn
      </Button>
    </div>
  );
};

export default LoginPage;
