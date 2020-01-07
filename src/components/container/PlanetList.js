import React, { PureComponent } from 'react';
// import styles for llst
import '../../styles/List.css';

export default class PlanetList extends PureComponent {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    // Define your componentDidMOunt that is responsible for retrieving data.
    componentDidMount() {
        //Use fetch api to get data for your planets using swapi planet api url, and pass a options with a property called method with a value of GET
        //indicating it is a Get request.
        fetch("https://swapi.co/api/planets", {
            method: "GET"
            //COnvert the response to json.
        }).then(res => res.json())
        //Now set the state of the data.
        .then(resJson => this.setState({data: resJson.results}))
        //Catch any error from the promise.
        .catch(err => console.log("Get Planets Error------", err));
    }
    render() {
        return (
            <div className="container">
                <div className="route-title">
                    <h3>Planets</h3>
                </div> 
                <div>
                    {/* If your data array has data map over the array */}
                    {this.state.data.length ?
                        this.state.data.map((planet, i) => <p key={i}>{planet.name}</p>)
                    : null}
                </div>
            </div>
        );
    }
}