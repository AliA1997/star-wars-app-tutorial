import React from 'react';

//Define navbar component responsible for routing throughout application.
function Navbar(props) {
    return (
        <nav>
            <button onClick={e => props.navigate(e, '/')}>
                <h1>Star Wars App</h1>
            </button>
            <div>
                <button onClick={e => props.navigate(e, '/')}>
                    <h2>Home</h2>
                </button>
                <button onClick={e => props.navigate(e, '/people')}>
                    <h2>People</h2>
                </button>
                <button onClick={e => props.navigate(e, '/planets')}>
                    <h2>Planets</h2>
                </button>
                <button onClick={e => props.navigate(e, '/starships')}>
                    <h2>Starships</h2>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;