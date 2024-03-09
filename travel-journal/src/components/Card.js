import React from "react";

export default function Card(props) {
  console.log(props.item);
  return (
    <div className="container">
      <img className="main-img" src={props.item.imageUrl} alt="Famous places" />
      <div className="first-container">
        <div className="inner-container">
          <img className="maps" src="Fill 219.png" alt="map" />
          <h5 className="location">{props.item.location}</h5>
          <a href={props.item.googleMapsUrl}>
            <p className="view">View on Google Maps</p>
          </a>
        </div>
        <div className="title">{props.item.title}</div>
        <div className="date">
          {props.item.startDate} - {props.item.endDate}
          <p className="description">{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
