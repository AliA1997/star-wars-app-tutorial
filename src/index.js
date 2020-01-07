//import React 
import React from 'react';
//import the named export called render from react-dom that will render your virtual dom.
import { render } from 'react-dom';
//import your app component from your app.js file in your components folder.
import App from './components/App';
//import your BrowserROuter from react-router-dom to configure your app's routes.
import {BrowserRouter as R} from 'react-router-dom';

render(<R><App /></R>, document.getElementById("root"));