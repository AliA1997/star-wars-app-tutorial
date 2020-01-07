import React from 'react';

//Define navbar component responsible for routing throughout application.
function Navbar(props) {
    return (
        <nav>
            <button onClick={e => props.navigate(e, '/')}>
                <h3>Home</h3>
            </button>
            <button onClick={e => props.navigate(e, '/people')}>
                <h3>People</h3>
            </button>
            <button onClick={e => props.navigate(e, '/planets')}>
                <h3>Planets</h3>
            </button>
            <button onClick={e => props.navigate(e, '/starships')}>
                <h3>Starships</h3>
            </button>
        </nav>
    );
}

export default Navbar;