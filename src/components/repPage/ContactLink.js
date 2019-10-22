import React from 'react';

const ContactLink = (props) => {
    return (
        <div className={props.class}><a href={props.href} target="_blank">{props.linkText}</a></div>
    )
}

export default ContactLink;