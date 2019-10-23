import React from 'react';
import ContactLink from './ContactLink';
import Address from './Address';

const ContactCard = (props) => {

    const getEachContact = (prop) => {
        // example structure of prop passed in (always an array):
        //   props.phones = ["(888) 888-8888", "(222) 222-2222"]
        //   props.addresses = [{ line1: "7 Beach St", ... }, { line1: "1202 5th St", ... }]

        if (!!prop) {
            return prop.map((contact, index) => returnJSX(prop, contact, index))
        }
    }

    const returnJSX = (prop, contact, index) => {
        switch (prop) {
            case props.address:
                return <Address key={index} address={formatAddress(contact)} />
            
            case props.channels:
                return <ContactLink key={index} href={`https://${contact.type}.com/${contact.id}`} linkText={contact.type} class={"social"} />

            case props.urls:
                return <ContactLink key={index} href={contact} linkText={contact} class={"official-site"}/>

            default:
                // phones and emails
                return <div key={index}>{contact}</div>
        }
    }

    const formatAddress = (address) => {
        // address = {
        //     line1: "111 hi st",
        //     line2: "Ste 100",
        //     line3: "",
        //     city: "somewhere",
        //     state: "OH",
        //     zip: "11111"
        // }

        // remove blank strings from address object
        // AND return array of address object's values
        let condensedAddr = Object.values(address).filter(Boolean);

        let street = condensedAddr.slice(0, -3);
        let cityState = condensedAddr.slice(-3, -1);
        let zip = condensedAddr.slice(-1);

        return street.join("\n") + "\n" + cityState.join(", ") + " " + zip
    }


    return (
        <div className="contact-card">
            {getEachContact(props.address)}
            {getEachContact(props.phones)}
            {getEachContact(props.emails)}
            {getEachContact(props.urls)}
            {getEachContact(props.channels)}
        </div>
    )
}

export default ContactCard;