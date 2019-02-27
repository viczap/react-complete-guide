import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '84c8b292-17c2-4066-ab22-439a9f419bcc', name: 'Victor', age: 31 },
      { id: 'e3152ab8-afac-4ef2-bdec-04bb2caf769c', name: 'Santi', age: 33 },
      { id: 'aad98140-ee7f-435c-88af-cdbd80f03560', name: 'Eli', age: 35 }
    ],
    showPersons: false
  };

  inputNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    //Modify a copy of the person in the state.
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    //Get a copy of the state.
    const persons = [...this.state.persons];

    //Update the reference.
    persons[personIndex] = person;
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    const classes = [];
    if (this.state.persons.length <= 1) {
      classes.push('red');
    }

    if (this.state.persons.length <= 2) {
      classes.push('bold');
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                delete={this.deletePersonHandler.bind(this, index)}
                changed={(evt) => this.inputNameHandler(evt, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1 className={classes.join(' ')}>I'm developing a React App</h1>
          <button style={style} onClick={this.togglePersonsHandler}>Switch persons!!</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
