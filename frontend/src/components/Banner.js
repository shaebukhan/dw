import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/images/banner-right.png";
import Sisyphous from "../assets/images/sisphy.svg";
import Circooles from "../assets/images/circooles.svg";
import Catalog from "../assets/images/catalog.svg";
import Quotient from "../assets/images/queotient.svg";
const Banner = () => {
    return (

        <div className="banner-bg-color">
            <div className='mt-top'>
                <div className="banner-space">
                    <div className="banner-sub">
                        <div className="banner-left">
                            <h1 className='common-title text-uppercase'>Vi hjälper dig med din renovering i Norrort</h1>
                            <p className='common-text my-4'>
                                Vi är ett utmärkt alternativ för dig som behöver hjälp med en renovering i Norrort!
                            </p>
                            <div className="pt-3">
                                <Link className='reg-btn'>Gratis offert</Link>
                            </div>
                        </div>
                        <div className="banner-right">
                            <img className='banner-img' src={BannerImage} alt="" />
                        </div>
                        <div className="banner-card">
                            <div className="banner-card-sub"><img src={Sisyphous} alt="" /></div>
                            <div className="banner-card-sub"><img src={Circooles} alt="" /></div>
                            <div className="banner-card-sub"><img src={Catalog} alt="" /></div>
                            <div className="banner-card-sub"><img src={Quotient} alt="" /></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Banner;