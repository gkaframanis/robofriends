// The view library, the React Bot.
import React from 'react';  
// Based on what screen we're rendering to. ReactDOM is used for the DOM. It's the glue of React.
// We can have ReactNative that renders to mobile phones.
import ReactDOM from 'react-dom'; 
// To connect Redux with React
import { Provider } from "react-redux";
// We need to create the redux store
import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import './index.css';
// If it doesn't have ending for the type of file, we assume it is js.
import App from "./containers/App";
import reportWebVitals from './reportWebVitals';
// Importing the searchRobots reducer.
import { searchRobots, requestRobots } from "./reducers";
// To use the tachyons package, to have access to predefined classes for styling.
import "tachyons";

const rootReducer = combineReducers({searchRobots, requestRobots});

// Creating the redux store | In real life with many reducers
// We can now use this store to our App.
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

// We wrap it inside the Provider and the Provider passes the store down to the App.
ReactDOM.render(
                <Provider store={store}>
                    <App/>
                </Provider>,
                document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

