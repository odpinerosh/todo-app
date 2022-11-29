import React from "react";
import './Card.css';

const Card = props => {
    let classes = 'card ' + props.addClass;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;