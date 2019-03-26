import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] Using useEffect');
        // const timer = setTimeout(() => {
        //     alert('Saving data in the cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            //clearTimeout(timer); 
            console.log('[Cockpit.js] It is running like a componentWillUnmount.');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect.');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red;
    }

    const assignedClasses = [];
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Switch persons!!</button>
            <button className={btnClass} onClick={authContext.login}>Authenticate!</button>
        </div>
    );
}

export default React.memo(cockpit);