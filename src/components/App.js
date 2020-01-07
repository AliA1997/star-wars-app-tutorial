import React, { PureComponent } from 'react';
//import withRouter to encapsulate App component with react-router-dom history props.
import { withRouter } from 'react-router-dom';
//import your styles
import '../styles/App.css';
//Navbar used to navigate to specific routes based on the path argument.
//Bind navigate function in component.
import Navbar from './presentational/Navbar';
//Import where routes will be rendered.
import Routes from '../Routes';

class App extends PureComponent {
    
    constructor() {
        super();
        this.state = {};
        this.navigate = this.navigate.bind(this);
    }

    navigate(e, path) {
        e.preventDefault();
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="app">
                <h2 className="app-title">Star Wars App</h2>
                <Navbar navigate={this.navigate} />
                <div className="content">
                    {Routes}
                </div>
            </div>
        )
    }
}

export default withRouter(App);