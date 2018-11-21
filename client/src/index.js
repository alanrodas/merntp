import React from 'react';
// import ReactDOM from 'react-dom';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';

import AppRoutes from './Route';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

render(
  <Router>
    <AppRoutes />
  </Router>,

  //ReactDOM.render(<App />,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
