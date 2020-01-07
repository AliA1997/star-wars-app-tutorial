//import react since you are using react components.
import React from 'react';
// import componnets needed for react-router-dom
import { Switch, Route } from 'react-router-dom';
//import the component needed for your routes.
import Home from './components/container/Home';
import PeopleList from './components/container/PeopleList';
import PlanetList from './components/container/PlanetList';
import StarshipList from './components/container/StarshipList';


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/people' component={PeopleList} />
        <Route path='/planets' component={PlanetList} />
        <Route path='/starships' component={StarshipList} />
    </Switch>
)