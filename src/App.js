import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import AdminPage from "./Components/AdminPage/AdminPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import Order from "./Components/Order/Order";
import OrderPage from "./Components/OrderPage/OrderPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import Manage from "./Components/Manage/Manage";

export const UserContext=createContext();
function App() {
 const [loggedInUser,setLoggedInUser]=useState({})

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <PrivateRoute path="/adminPage">
          <AdminPage></AdminPage>
        </PrivateRoute>
        <Route path='/placeOrder'>
          <PlaceOrder></PlaceOrder>
        </Route>
        <Route path='/manage'>
          <Manage></Manage>
        </Route>
        <PrivateRoute path="/checkout/:id">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/order">
          <OrderPage></OrderPage>
        </PrivateRoute>
        <Route exact="*">
          <h1>404 Error!</h1>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
