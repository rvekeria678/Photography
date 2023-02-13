import React from "react";
import NavigationBar from "./components/Navigationbar";
import Card from "./components/Card";
import "./css/app.css";

import Trupti_image from "./images/trupti.jpg";
import Kush_image from "./images/kush.jpg";

const App = () => (
    <div>
        <NavigationBar />
        <div className="client-cards">
            <Card
                image={Trupti_image}
                client_name="Trupti Patel"
                synopsis="I was more than satisfied with the results!"
                event_title="Business Portrait"
                card_desc="Three photographers showed up to our event in Boston where they each took good quality photos of all the employees."
            />
            <Card
                image={Kush_image}
                client_name="Kush Vekeria"
                synopsis="The attention to lighting was supurb. Well done!"
                event_title="Personal Occasion"
                card_desc="A photographer came out to my New Hampshire log cabin where they took family portraits commerating my birthday!"
            />
        </div>
        <footer><small>Copyright 2023, All Rights Reserved</small></footer>
    </div>
);

export default App;