import React from 'react';
import BathPointImg from "../assets/images/tick-bath.svg";
import { Link } from 'react-router-dom';
import Gamla from "../assets/images/gamla.svg";
import Planning from "../assets/images/planning.png";
import Kitchen from "../assets/images/kitchen.png";
import BusinessImg from "../assets/images/business.png";
const BathRoom = () => {
    return (
        <>
            <div className="bath-room-main">
                <div className="bathroom-sub">
                    <div className="bathroom-left">
                        <h2 className="bathroom-left-title">
                            Renovering av badrum
                        </h2>
                        <p className="bathroom-text-c">
                            Ett badrum spelar i de flesta fall en mycket viktig roll i ett hushåll eftersom det är en plats där man spenderar mycket tid. Just därför är det också viktigt med ett bekvämt och mysigt badrum som man trivs i.
                        </p>
                        <div className="bath-points-main">
                            <div className="bath-points-left">
                                <div className="bath-point">
                                    <img src={BathPointImg} alt="" /> <span className="bathroom-text-c">Aliquam eros justo, posuere loborti vive rra laoreet</span>
                                </div>
                                <div className="bath-point">
                                    <img src={BathPointImg} alt="" /> <span className="bathroom-text-c"> laoreet matti ullamc orper posu ere viverra</span>
                                </div>
                                <div className="bath-point">
                                    <img src={BathPointImg} alt="" /> <span className="bathroom-text-c"> posuere loborti vive rra laoreet matti ullamc orper</span>
                                </div>
                                {/* <div className="bath-point">
                                    <img src={BathPointImg} alt="" /> <span className="bathroom-text-c">Aliquam eros justo, posuere loborti vive rra laoreet</span>
                                </div>
                                <div className="bath-point">
                                    <img src={BathPointImg} alt="" /> <span className="bathroom-text-c">Aliquam eros justo, posuere loborti vive rra laoreet</span>
                                </div> */}
                                <div className="pt-3">
                                    <Link className='reg-btn'>Gratis offert</Link>
                                </div>
                            </div>
                            <div className="bath-points-right">
                                <div className="dome">
                                    <img src={Gamla} alt="" />
                                    <h2 className="dome-title">100+</h2>
                                    <p className="dome-text">Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bathroom-right">
                        <div className="bathroom-top">
                            <img className='planning' src={Planning} alt="" />
                            <img className='kitchen' src={Kitchen} alt="" />
                        </div>
                        <div className="bathroom-bottom">
                            <img className='business-img' src={BusinessImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BathRoom;