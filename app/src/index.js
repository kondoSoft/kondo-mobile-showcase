import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router,
         Route,
         Link,
       } from 'react-router-dom'

const Routing = ()=>(
  <Router >
    <Route path='/:app/:option?' component={App}>
      {/* <Route path='./:option' component={App}/> */}
    </Route>

  </Router>
)

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
