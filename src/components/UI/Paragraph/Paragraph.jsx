import React from 'react';

import classes from './Paragraph.module.scss'

const Paragraph = (props) => {
    return (
        <div className={classes.paragraph}>
            {props.children}
        </div>
    );
};

export default Paragraph;