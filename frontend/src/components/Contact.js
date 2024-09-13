import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Planning from "../assets/images/contact-bottom.png";

const Contact = () => {
    return (
        <>
            <div className="invest-space">

                <div className="invest-card-sub">
                    <div className='contact-card-left-main'>
                        <div className="contact-card-left">
                            <h1 className="contact-left-title">Contact Info</h1>
                            <div className="contact-sub-d">
                                <div className="contact-detail">
                                    <div className="contact-circle">
                                        <BiSolidPhoneCall className='contact-circle-icon' />
                                    </div>
                                    <div className="contact-circle-right">
                                        <h3 className="contact-circle-sm-title">Call Us</h3>
                                        <Link className='contact-right-link' to="tel:012 345 678 9101">012 345 678 9101</Link>
                                    </div>
                                </div>
                                <div className="contact-detail">
                                    <div className="contact-circle">
                                        <FiMail className='contact-circle-icon' />
                                    </div>
                                    <div className="contact-circle-right">
                                        <h3 className="contact-circle-sm-title">Email</h3>
                                        <Link className='contact-right-link' to="mailto:info@gmail.com">info@gmail.com</Link>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <div className="contact-circle">
                                        <IoLocationSharp className='contact-circle-icon' />
                                    </div>
                                    <div className="contact-circle-right">
                                        <h3 className="contact-circle-sm-title">Call Us</h3>
                                        <Link className='contact-right-link'>Dhaka 102, utl 1216, road 45 <br />
                                            stert linehouse street</Link>
                                    </div>
                                </div>

                            </div>
                            <h1 className="contact-left-title">Follow Us</h1>
                            <div className="d-flex">
                                <div className="me-0">
                                    <Link className="contact-circle">
                                        <FaFacebook className='contact-circle-icon' />
                                    </Link>
                                </div>
                                <div className="me-0">
                                    <Link className="contact-circle">
                                        <FaInstagram className='contact-circle-icon' />
                                    </Link>
                                </div>
                                <div className="me-0">
                                    <Link className="contact-circle">
                                        <FaTwitter className='contact-circle-icon' />
                                    </Link>
                                </div>
                                <div className="me-0">
                                    <Link className="contact-circle">
                                        <FaLinkedinIn className='contact-circle-icon' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <img className='w-100' src={Planning} alt="" />
                        </div>
                    </div>
                    <div style={{ borderRadius: "0px", background: ' #FFFFFF', height: "100%" }} className="invest-card-sub-right shadow">
                        <div className="invest-inp-main">
                            <div className="invest-inp-main-sub">
                                <label className='invest-label'>Full name</label>
                                <input type="text" className='invest-inp' placeholder='John' />
                            </div>
                            <div className="invest-inp-main-sub">
                                <label className='invest-label'>Contact</label>
                                <input type="text" className='invest-inp' placeholder='9876' />
                            </div>
                        </div>
                        <div className="invest-inp-main-sub-post">
                            <label className='invest-label'>Post</label>
                            <input type="text" className='invest-inp' placeholder='E-Post' />
                        </div>
                        <div className="invest-inp-main-sub-post">
                            <label className='invest-label'>Description</label>
                            <textarea name="" className='invest-inp' rows='6'></textarea>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <input type="radio" />
                            <p className='mb-0 ps-2 radio-text'>Jag godkänner  <Link>integritetspolicyn</Link></p>
                        </div>
                        <div className="my-5">
                            <button className='reg-btn border-0'>Gratis offert</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Contact;