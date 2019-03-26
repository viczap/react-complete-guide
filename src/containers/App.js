import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Constructor');
    // You can set an initial state for the component state here.
    this.state = {
      persons: [
        { id: '84c8b292-17c2-4066-ab22-439a9f419bcc', name: 'Victor', age: 31 },
        { id: 'e3152ab8-afac-4ef2-bdec-04bb2caf769c', name: 'Santi', age: 33 },
        { id: 'aad98140-ee7f-435c-88af-cdbd80f03560', name: 'Eli', age: 35 }
      ],
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      isAuthenticated: false
    };
  }

  static contextType = AuthContext;

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  inputNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //Modify a copy of the person in the state.
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    //Get a copy of the state.
    const persons = [...this.state.persons];

    //Update the reference.
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  authenticateHandler = () => {
    this.setState({ isAuthenticated: true });
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.inputNameHandler}
      />
    }

    return (

      <Aux>
        <button onClick={() => this.setState({ showCockpit: false })}>Unshow cockpit</button>
        <AuthContext.Provider
          value={{
            isAuthenticated: this.state.isAuthenticated,
            login: this.authenticateHandler
          }}>
          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          /> : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
