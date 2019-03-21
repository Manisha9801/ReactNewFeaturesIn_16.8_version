import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MultipleUseStateExample from './MultipleUseStateExample/MultipleUseStateExample' 
import CleanUpWithUseEffect from './CleanUpWithUseEffect/CleanUpWithUseEffect';

//For single use of useState() hook example
// ReactDOM.render(<App />, document.getElementById('root'));

//For mutiple use of useState() hooks example
// ReactDOM.render(<MultipleUseStateExample />, document.getElementById('root'));

//For cleanup example using useEffect();
ReactDOM.render(<CleanUpWithUseEffect />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
