import React from 'react';
import Location2 from "../assets/images/location2.png";
import Location3 from "../assets/images/location3.png";
import { FaRegHeart } from 'react-icons/fa6';
const AboutMain = () => {
    return (
        <>
            <div className="about-space">
                <div className="our-services-text">
                    <h1 className="services-title">Om oss på <br /> Dwelly Fix AB</h1>
                    <p className="services-text">Kontakta oss om du har några frågor eller om du vill ha en offert.</p>
                </div>
                <div className="about-cards-main">
                    <div className="location-card about-translateone">
                        <img className='w-100' src={Location2} alt="" />
                        <div className="px-2">
                            <div className="d-flex justify-content-between align-items-center my-3">
                                <h4 className="location-card-title">$79,000<span>/Pkr</span> </h4>
                                <div className="heart-m">
                                    <FaRegHeart className='heart-icon' />
                                </div>
                            </div>
                            <h1 className="location-b-title">Lyxig Inomhusrenovering</h1>
                            <p className="location-card-text">
                                Elviaveien 8, 1234 Oslo
                            </p>
                            <div className="location-card-border"></div>
                        </div>
                    </div>
                    <div className="location-card about-translatetwo">
                        <img className='w-100' src={Location2} alt="" />
                        <div className="px-2">
                            <div className="d-flex justify-content-between align-items-center my-3">
                                <h4 className="location-card-title">$79,000<span>/Pkr</span> </h4>
                                <div className="heart-m">
                                    <FaRegHeart className='heart-icon' />
                                </div>
                            </div>
                            <h1 className="location-b-title">Lyxig Inomhusrenovering</h1>
                            <p className="location-card-text">
                                Elviaveien 8, 1234 Oslo
                            </p>
                            <div className="location-card-border"></div>
                        </div>
                    </div>

                    <div className="location-card about-translatethree">
                        <img className='w-100' src={Location3} alt="" />
                        <div className="px-2">
                            <div className="d-flex justify-content-between align-items-center my-3">
                                <h4 className="location-card-title">$79,000<span>/Pkr</span> </h4>
                                <div className="heart-m">
                                    <FaRegHeart className='heart-icon' />
                                </div>
                            </div>
                            <h1 className="location-b-title">Lyxig Inomhusrenovering</h1>
                            <p className="location-card-text">
                                Elviaveien 8, 1234 Oslo
                            </p>
                            <div className="location-card-border"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMain;