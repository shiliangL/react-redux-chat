import 'normalize.css/normalize.css'// CSS resets
import '@/styles/App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import App from './App';
import { rootReducer } from '@/redux' 
import * as serviceWorker from './serviceWorker';


let store = createStore(rootReducer, 
compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )  
)
  

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
