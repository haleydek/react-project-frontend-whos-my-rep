import React from 'react';

const ContactLink = (props) => {
    switch (props.type) {
        case "Facebook":
            return <div className={props.class}><a href={props.href} target="_blank"><img src="https://i.imgur.com/lT1Tcly.png" alt="facebook" /></a></div>
        case "Twitter":
            return <div className={props.class}><a href={props.href} target="_blank"><img src="https://i.imgur.com/dj9kOF6.png" alt="twitter" /></a></div>
        case "Instagram":
            return <div className={props.class}><a href={props.href} target="_blank"><img src="https://i.imgur.com/XhAdcsB.png" alt="instagram" /></a></div>
        case "YouTube":
            return <div className={props.class}><a href={props.href} target="_blank"><img src="https://i.imgur.com/k1lljkH.png" alt="youtube" style={{width: 'auto'}} /></a></div>
        case "GooglePlus":
            return <React.Fragment></React.Fragment>
        default:
            return <div className={props.class}><a href={props.href} target="_blank">{props.linkText || props.type}</a></div>

    }
}

export default ContactLink;