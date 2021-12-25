import React from 'react';

import classes from './Button.module.scss'

const Button = (props) => {

    const handleClick = () => {
        alert('Была нажата кнопка');
    }

    return (
        <button onClick={handleClick} className={classes.button}>
            {props.children}
        </button>
    );
};

export default Button;