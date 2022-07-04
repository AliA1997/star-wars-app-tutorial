import React, { PureComponent } from 'react';
// import styles for list
import '../../styles/List.css';

export default class StarshipList extends PureComponent {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    //Define your componentDIdMount that will responsible for retrieving data.
    componentDidMount() {
        //Use fetch api used to retrieve data for starships, and pass a object with a method property set to GEt indicating it is a Get request.
        fetch("https://swapi.dev/api/starships", {
            method: "GET"
            //THen convert the response to json.
        }).then(res => res.json())
        //THen set the state of the data to the results.
        .then(resJson => this.setState({data: resJson.results}))
        //Then catch any errors when retrieving data from the starships api url.
        .catch(err => console.log("Get Starships Error---------", err));
    }
    render() {
        return (
            <div className="container">
                <div className="route-title">
                    <h3> Starships</h3>
                </div>
                <div>
                    {/*Map over the data array if it has data, and if it contains data it will be truthy */}
                    {this.state.data.length ?
                        this.state.data.map((starship, i) => <p key={i}>{starship.name}</p>)
                    : null}
                </div>
            </div>
        )   
    }
}