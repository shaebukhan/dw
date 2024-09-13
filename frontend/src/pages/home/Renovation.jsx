import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CardImg1 from "../../assets/images/services-card1.png";
import CardImg2 from "../../assets/images/services-card2.png";
import CardImg3 from "../../assets/images/services-card3.png";
import CardImg4 from "../../assets/images/services-card4.png";

const Renovation = () => {
    return (
        <>
            <Navbar />
            <div className="mt-top">
                <div className="our-services">
                    <div className="our-services-text">
                        <h1 className="services-title">Våra tjänster</h1>
                        <p className="services-text">Vi är en byggmästare som utför alla tänkbara typer av byggprojekt, stora som små.</p>
                    </div>
                    <div className="services-sub">
                        <div className="services-card-main">
                            <div className="services-card">
                                <img src={CardImg1} alt="" className="sevices-card-img" />
                                <h3 className="services-card-title">Badrumsrenoveringar</h3>
                                <p className="services-card-text">
                                    Vill du renovera ditt badrum? I så fall är vi ett utmärkt alternativ för dig. Just badrumsrenoveringar är nämligen en av de många typer av renoveringar som vi specialiserar oss på. För oss spelar det ingen roll hur omfattande din badrumsrenovering är, vi kan hjälpa dig oavsett vilket. När vi är klara kommer du att få ett modernt och bekvämt badrum där du kommer att kunna spendera mycket tid!
                                </p>
                            </div>
                            <div className="services-card">
                                <img src={CardImg2} alt="" className="sevices-card-img" />
                                <h3 className="services-card-title">Villarenoveringar</h3>
                                <p className="services-card-text">
                                    Vi hjälper gärna dig som bor i villa med att renovera. Vi kan göra allt från att renovera en del av din bostad, till att bistå med en tillbyggnad såsom en ny pool eller altan. Hör av dig till oss idag och berätta mer om hur planerna för din villarenovering ser ut så kan vi med din vision i åtanke ta fram en projektplan som du sedan får godkänna.
                                </p>
                            </div>
                        </div>
                        <div className="services-card-main services-card-two">
                            <div className="services-card bg-serve-card">
                                <img src={CardImg3} alt="" className="sevices-card-img" />
                                <h3 className="services-card-title text-white">Totalrenoveringar</h3>
                                <p className="services-card-text text-white">
                                    En annan typ av renoveringar som vi kan hjälpa dig med är totalrenoveringar. Det kan vi göra oavsett om det handlar om en lägenhet, ett hus eller en villa. Vi inleder alltid det hela med att göra en utvärdering där du får berätta mer om din vision och dina idéer. Därefter utarbetar vi en projektplan och sätter sedan igång med själva renoveringen. Som byggmästare tar vi helhetsansvaret, från konsultation till slutbesiktning.
                                </p>
                            </div>
                        </div>
                        <div className="services-card-main d-flex justify-content-end mb-5">
                            <div className="services-card mb-5">
                                <img src={CardImg4} alt="" className="sevices-card-img" />
                                <h3 className="services-card-title">Lägenhetsrenoveringar</h3>
                                <p className="services-card-text">
                                    Även du som bor i lägenhet kan vända dig till oss för att få nyrenoverat! Vi kan göra allt från en totalrenovering av din lägenhet till att göra om i ett visst utrymme. Precis som vid alla våra byggarbeten lägger vi yttersta vikt vid design och materialval för att skapa en exklusiv känsla så att du kan trivas i din nyrenoverade lägenhet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Renovation;