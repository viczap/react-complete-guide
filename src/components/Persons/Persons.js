import React, { Component } from 'react';
import Person from './Person/Person';

export default class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    delete={this.props.clicked.bind(this, index)}
                    changed={(evt) => this.props.changed(evt, person.id)}
                />
            );
        })
    }
}