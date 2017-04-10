import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, browserHistory, IndexRedirect} from 'react-router'
import {Provider} from 'react-redux';
import store from './store';
import  LoginComponent from './containers/login/Login'
import Store from './components/store/store';
import Dashboard from './components/dashboard/dashboard';
import rootMainContainer from './containers/dashboard';
import App from './containers/App/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); 

ReactDOM.render((
<MuiThemeProvider>  
          <Provider store={store}>
              
 <Router history={browserHistory}>
      <Route path="/" component={rootMainContainer}>
      <IndexRedirect to="/login" />
     
     <Route path="/store" component={Store} />
     <Route />
      

     <Route path="dashboard" component={Dashboard}/>
     </Route>
     <Route path="/login" component={LoginComponent} />
   
</Router>

          </Provider>
        </MuiThemeProvider>
),
    document.getElementById('root')
);
