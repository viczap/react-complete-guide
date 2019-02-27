import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const appHooks = props => {

    const [personState, setPersonState] = useState({
        persons: [
            { name: 'Victor', age: 31 },
            { name: 'Santi', age: 33 },
            { name: 'Eli', age: 35 }
        ]
    });

    const changeNameHandler = () => {
        setPersonState({
            persons: [
                { name: 'Victor Manuel', age: 31 },
                { name: 'Santi', age: 33 },
                { name: 'Eli', age: 34 }
            ]
        });
    }
    return (
        <div className="App">
            <h1>I'm developing a React App</h1>
            <button onClick={changeNameHandler}>Switch name!</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}>
                <p>My hobbies are: Biking, Running and Travelling!</p>
            </Person>
            <Person name={personState.persons[1].name} age={personState.persons[1].age} />
            <Person name={personState.persons[2].name} age={personState.persons[2].age} />
        </div>
    );

}

export default appHooks;
