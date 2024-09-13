import React from 'react';
import Navbar from '../../components/Navbar';
import AboutMain from '../../components/AboutMain';
import VirtualHome from '../../components/VirtualHome';
import BathRoom from '../../components/BathRoom';
import Footer from '../../components/Footer';

const PageFive = () => {
    return (
        <>
            <Navbar />
            <div className="mt-top">
                <AboutMain />
                <VirtualHome />
                <BathRoom />
                <Footer />
            </div>
        </>
    );
};

export default PageFive;