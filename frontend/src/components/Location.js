import React from 'react';
import Location1 from "../assets/images/location1.png";
import Location2 from "../assets/images/location2.png";
import Location3 from "../assets/images/location3.png";
import Location4 from "../assets/images/location4.png";
import Location5 from "../assets/images/location5.png";
import Location6 from "../assets/images/location6.png";
import Location7 from "../assets/images/location7.png";
import Location8 from "../assets/images/location8.png";

import LocationCard from './LocationCard';
const Location = ({ props }) => {
    return (
        <>
            <div className="location-space">
                <div className="location-t-btn">
                    <div className="loc-text">
                        <h1 className="location-title">Based on our location</h1>
                        <p className='invest-text'>qui officia deserunt mollit anim id es</p>
                    </div>
                    <div className="loc-btn">
                        <button className='reg-btn border-0'>Gratis offert</button>
                    </div>
                </div>
                <div className="location-card-main">
                    <LocationCard image={Location1} />
                    <LocationCard image={Location2} />
                    <LocationCard image={Location3} />
                    <LocationCard image={Location4} />
                    <LocationCard image={Location5} />
                    <LocationCard image={Location6} />
                    <LocationCard image={Location7} />
                    <LocationCard image={Location8} />
                </div>
            </div>
        </>
    );
};

export default Location;