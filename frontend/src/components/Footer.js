import { Link } from "react-router-dom";
import Logo from "../assets/images/home-white.svg";
import Facebook from "../assets/images/Facebook.svg";
import InstaGram from "../assets/images/instagram.svg";
import Linkedin from "../assets/images/linkedin.svg";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="b-ftr"></div>
            <div className="common-space pb-1 ftr">
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/">
                                <div className="d-flex align-items-center">
                                    <img src={Logo} alt="logo" />
                                    <h2 className="logo-text text-white">DWELLY FIX</h2>
                                </div>
                            </Link>
                            <p className="ftr-text my-5">
                                Varmt välkommen till oss på Dwelly Fix AB! Vi har tillhandahållit exklusiva och eleganta renoveringslösningar i Stockholmsområdet i över 10 års tid.
                            </p>
                            <Link to="tel:0812220690" className="ftr-text">
                                <FaPhone className="me-3" /> 08-12 22 06 90
                            </Link>
                        </div>

                        <div className="col-md-4 d-flex justify-content-center">
                            <div className="ftr-second-sec">
                                <h6 className="ftr-small-title">Länkar</h6>
                                <div className="ftr-link">
                                    <Link to="/">Hem</Link>
                                </div>
                                <div className="ftr-link">
                                    <Link to="/renovation">Renovering</Link>
                                </div>
                                <div className="ftr-link">
                                    <Link to="/services">Tjänster</Link>
                                </div>
                                <div className="ftr-link">
                                    <Link to="/about">Om oss</Link>
                                </div>

                                <div className="ftr-link">
                                    <Link to="/contact">Kontakt</Link>
                                </div>
                                <div className="ftr-link">
                                    <Link to="/contact">Bygga hus i Norrort</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h6 className="ftr-small-title">Contact Info</h6>
                            <div className="ftr-link">
                                <Link>
                                    Dwelly Fix AB<br />
                                    Medborgarplatsen 11<br />
                                    118 26 Stockholm<br />
                                    Stockholms Län<br />
                                </Link>
                            </div>
                            <div className="ftr-link">
                                <Link>
                                    Org.nr: 559421-1640
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>

                <hr className="border-white" />

                <div className="my-2">
                    <p className="text-center d-flex gap-4 justify-content-center">
                        <Link to="#"><img src={Facebook} alt="Facebook" /></Link>
                        <Link to="#"><img src={InstaGram} alt="Instagram" /></Link>
                        <Link to="#"><img src={Linkedin} alt="LinkedIn" /></Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
