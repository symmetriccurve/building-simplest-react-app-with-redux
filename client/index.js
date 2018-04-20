import ReactDOM from 'react-dom';
import React from 'react';
import App from './containers/App'
require('./index.html')
require('./styles.css')
import store from './store'
console.log("This is my consolidated State",store.getState())

import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>  ,
  document.getElementById('root')
);
