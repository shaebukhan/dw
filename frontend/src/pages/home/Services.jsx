import React from 'react';
import Navbar from '../../components/Navbar';
import BathRoom from '../../components/BathRoom';
import Invest from "../../components/Invest";
import VirtualHome from '../../components/VirtualHome';
import Footer from '../../components/Footer';
const Services = () => {
    return (
        <>
            <Navbar />
            <div className="mt-top">
                <div className="possible-space">
                    <div className="possible-text-sec">
                        <h1 className="possible-title">Bästa möjliga hjälp med <br /> din renovering</h1>
                        <p className="possible-text">Genom att satsa på oss kan du försäkra dig om att du kommer att <br /> få bästa tänkbara hjälp med din renovering till ett bra pris!</p>
                    </div>
                </div>
            </div>
            <BathRoom />
            <Invest />
            <VirtualHome />
            <Footer />
        </>
    );
};

export default Services;