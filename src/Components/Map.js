import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ center }) => {
  const mapStyles = {
    height: "400px",
    width: "800px",
  };

  return (
    <div className="google-map">
      <h1 className="primary-heading">Masjid Address</h1>
      <br />
      <LoadScript googleMapsApiKey="AIzaSyBT-BDbEFH3kGHfI-brwE55ue39bNFGJXs">
        <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;