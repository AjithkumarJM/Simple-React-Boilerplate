import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import promise from 'redux-promise';
import ReduxThunk from 'redux-thunk'
import App from './components/app';
import reducers from './reducers';

const customMiddleWare = store => next => action => {
    //   console.log("Middleware triggered:", action);
    next(action);
}

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, customMiddleWare)(createStore);

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
), document.getElementById('container'));