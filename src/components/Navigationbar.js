import React from "react";
import '../css/NavigationBar.css';
import camera_logo from '../images/camera-logo.png';

export default function NavigationBar() {
    return (
        <nav className="nav">
            <div className="nav--brand">
                <img src={camera_logo}></img>
                <h1>Nitin's Photography</h1>
            </div>
            <ul className="nav--items">
                <li>Gallery</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}