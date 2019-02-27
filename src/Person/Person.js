import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.delete}>I'm {props.name} and I'm {props.age} years old!</p>
            <input value={props.name} onChange={props.changed} />
        </div>
    );
};

export default person;