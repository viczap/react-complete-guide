import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

    const styles = {
        '@media(min-width : 500px)' : {
            'width' : '450px'
        }
    }

    return (
        <div className="Person" style={styles}>
            <p onClick={props.delete}>I'm {props.name} and I'm {props.age} years old!</p>
            <input value={props.name} onChange={props.changed} />
        </div>
    );
};

export default Radium(person);