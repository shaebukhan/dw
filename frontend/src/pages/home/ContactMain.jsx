import React from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const ContactMain = () => {
    return (
        <>
            <Navbar />
            <div className="mt-top">
                <div className="our-services">
                    <div className="our-services-text">
                        <h1 className="services-title">Våra tjänster</h1>
                        <p className="services-text">Vi är en byggmästare som utför alla tänkbara typer av byggprojekt, stora som små.</p>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    );
};

export default ContactMain;