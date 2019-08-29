import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import CreateComponent from './Create/CreateComponent';
import ListComponent from './List/ListComponent';
import HomeComponent from './Home/HomeComponent';

const RootRouting: React.FC = () => {
  return (
    <Switch>

      <Route path='/create' component={CreateComponent}/>

      <Route path='/list' component={ListComponent}/>

      <Route path='/' component={HomeComponent}/>

    </Switch>
  );
};

export default withRouter(RootRouting);
