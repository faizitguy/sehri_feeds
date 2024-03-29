import React from "react";
import Map from './Map'

const Contact = () => {
  const center = { lat: 35.8393438, lng: 10.5967063 }; 

  return (
    <div className="contact-page-wrapper">
      <Map center={center} />
    </div>
  );
};

export default Contact;
