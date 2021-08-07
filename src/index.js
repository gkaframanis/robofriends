// The view library, the React Bot.
import React from 'react';  
// Based on what screen we're rendering to. ReactDOM is used for the DOM. It's the glue of React.
// We can have ReactNative that renders to mobile phones.
import ReactDOM from 'react-dom'; 
import './index.css';
// If it doesn't have ending for the type of file, we assume it is js.
import App from "./containers/App";
import reportWebVitals from './reportWebVitals';
// To use the tachyons package, to have access to predefined classes for styling.
import "tachyons";


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
