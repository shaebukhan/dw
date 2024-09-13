import React from 'react';
import VirtualHomeImg from "../assets/images/virtual-home.svg";
import { Link } from 'react-router-dom';
import PlayIcon from "../assets/images/play-icon.svg";
import DealHomeIcom from "../assets/images/deal-home.svg";
const VirtualHome = () => {
    return (
        <>
            <div className="virtual-space">
                <div className="virtual-home">
                    <div className="virtual-h-left">
                        <img className='virtual-h-img' src={VirtualHomeImg} alt="" />
                        <div className="v-h-tour play-position">
                            <div className="play-icon-m">
                                <img src={PlayIcon} alt="" />
                            </div>
                            <div className="">
                                <h3 className="v-h-tour-title">Virtual home tour</h3>
                                <p className="virtual-text-p mb-0">we provide you virtual home tour</p>
                            </div>
                        </div>
                        <div className="v-h-tour deal-position">
                            <div className="deal-home-icon">
                                <img src={DealHomeIcom} alt="" />
                            </div>
                            <div className="">
                                <h3 className="v-h-tour-title">find the best deals</h3>
                                <p className="virtual-text-p mb-0">we provide you virtual home Renovation</p>
                            </div>
                        </div>
                    </div>
                    <div className="virtual-h-right">
                        <h2 className="virtual-h-right-title">Förstklassig renovering i Norrort</h2>
                        <p className="virtual-text">
                            Går du i renoveringstankar?    Är det      viktigt för   dig    med en byggmästare som har god vana av att genomföra projekt med elegant  utförande   och    högkvalitativa     materialval? Då är vi företaget för dig! När du anlitar oss för hjälp med renovering i Norrort kan du alltid räkna med ett förstklassigt resultat. Vi är oerhört kompetenta samtidigt som vi är mycket noggranna
                            när vi arbetar. Dessutom nöjer vi oss aldrig med någon av de renoveringar vi utför förrän även du som anlitat oss är fullständigt nöjd.
                            <br />
                            <br />
                            Ett exempel på en typ av renovering i Norrort som vi kan hjälpa dig med är                 badrumsren               eringar. Vi     utför      högkvalitativa badrumsrenoveringar och kan skräddarsy lösningar efter dina önskemål, detta inkluderar även renoveringar av bastus och tvättstugor.
                        </p>
                        <div className="my-5">
                            <Link className='reg-btn'>Gratis offert</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VirtualHome;