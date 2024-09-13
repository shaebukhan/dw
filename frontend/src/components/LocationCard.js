import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
const LocationCard = ({ image }) => {
    return (
        <div className="location-card">
            <img className='w-100' src={image} alt="" />
            <div className="px-2">
                <div className="d-flex justify-content-between align-items-center my-3">
                    <h4 className="location-card-title">$79,000<span>/Pkr</span> </h4>
                    <div className="heart-m">
                        <FaRegHeart className='heart-icon' />
                    </div>
                </div>
                <h1 className="location-b-title">Komplett Villarenovering</h1>
                <p className="location-card-text">
                    Elviaveien 8, 1234 Oslo
                </p>
                <div className="location-card-border"></div>
            </div>
        </div>
    );
};

export default LocationCard;