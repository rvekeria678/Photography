import React from "react";
import "../css/Card.css";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image}></img>
            <div className="card--shortdesc">
                <h4 className="card--title">{props.client_name}</h4>
                <p className="card--syn">-"{props.synopsis}"</p>
            </div>
            <div className="card--event">
                <h4 className="card--event-title">For <span className="bold">{props.event_title}</span></h4>
                <p className="card--desc">{props.card_desc}</p>
            </div>
        </div>
    )
}