import React from 'react';
import ReactDOM from 'react-dom';
// import external libraries
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
// import services, routes
import * as serviceWorker from './serviceWorker';
import { history } from './utils/history';
import store from './store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
