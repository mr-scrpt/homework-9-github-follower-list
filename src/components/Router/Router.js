// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина
import React, { Component } from 'react';
import {Switch, Route, NavLink, Redirect, BrowserRouter} from 'react-router-dom';
import Login from "../Login";
//import Search from "../Search";

export default class Router extends Component{

  render() {

    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact/>
            {/*<Route path="/search" comonent={Search}/>*/}
          </Switch>
        </BrowserRouter>
      </>
    )

  }
}