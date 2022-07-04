
import React, { PureComponent } from 'react';
//import styles for each list componet.
import '../../styles/List.css';

export default class PeopleList extends PureComponent {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        //Fetch your people endpoint from swapi api, and then pass a object with a method property set to get indicating it is a get request.
        fetch("https://swapi.dev/api/people", {
            method: "GET"
            //Resolve your promise, and convert the response to json.
        }).then(res => res.json())
        //After converting to json then set the data state to the results property of the response.
        .then(resJson => {
            this.setState({data: resJson.results});
            //For every promise make sure to catch any errors.
        }).catch(err => console.log("People Error----------", err));
    }
    render() {
        return (
            <div className='container'>
                <div className="route-title">
                    <h3>Starwars People</h3>
                </div>
                <div>
                    {/*If the data array has values based on if it contains one item which would be truthy.
                     Render it. */}
                    {this.state.data.length 
                    ? this.state.data.map((person, i) => <p key={i}>{person.name}</p>)
                    : null}
                </div>
            </div>
        );
    }
}