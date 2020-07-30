import React from 'react';
import { Switch, Route, hashHistory as history} from 'react-router-dom';

import {Home} from './pages/Home';
import {SecondPage} from './pages/SecondPage'

const Main = () => {
    return (
      /* The Switch decides which component to show based on the current URL.*/
      <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/page2' component={SecondPage}></Route>
      </Switch>
    );
}

export default Main;