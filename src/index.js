import React from 'react';
import ReactDOM from 'react-dom';
import { Route,BrowserRouter,Switch} from 'react-router-dom';
import App from './components/home';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <BrowserRouter>
    <Switch>
          <Route exact path="/" component ={App} />
    </Switch>
    </BrowserRouter>,
    document.getElementById('root'));