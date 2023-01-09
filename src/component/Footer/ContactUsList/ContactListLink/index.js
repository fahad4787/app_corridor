import React from "react";

const ContactListLink = (props) => {
  return (
    <li>
      <a href="#">
        {props.icon}
        <span>{props.text}</span>
      </a>
    </li>
  );
};

export default ContactListLink;
