import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ListComponent from './components/List/ListComponent';
import HomeComponent from './components/Home/HomeComponent';
import { store } from './store';
import CreateComponentContainer from './containers/CreateComponentContainer';

const RootRouting: React.FC = () => {
  return (
    <Provider store={store}>
      <Switch>

        <Route path='/create' component={CreateComponentContainer}/>

        <Route path='/list' component={ListComponent}/>

        <Route path='/' component={HomeComponent}/>

      </Switch>
    </Provider>
  );
};

export default withRouter(RootRouting);
