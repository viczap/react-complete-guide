import React, { Component } from 'react';
import styles from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElementRef.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.isAuthenticated);
    }

    static propTypes = {
        delete: PropTypes.func,
        name: PropTypes.string,
        age: PropTypes.number,
        changed: PropTypes.func
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p>{this.context.isAuthenticated ? 'Authenticated!' : 'Please, log in'}</p>
                <p onClick={this.props.delete}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <input
                    ref={this.inputElementRef}
                    value={this.props.name}
                    onChange={this.props.changed} />
            </Aux>
        );
    }
}

export default withClass(Person, styles.Person);