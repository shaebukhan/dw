import React from 'react';
import Percentage from "../assets/images/percentage.svg";
import Increase from "../assets/images/increase.svg";
import Buildings from "../assets/images/buildings.svg";
import Dollar from "../assets/images/$.svg";
import Search from "../assets/images/search.svg";
import Tick from "../assets/images/tick.svg";
import { Link } from 'react-router-dom';
const Invest = () => {
    return (
        <>
            <div className="invest-space">
                <div className="invest-card">
                    <div className="invest-card-sub">
                        <div className="invest-card-sub-left">
                            <h2 className="invest-card-sub-title">Varför satsa på vårt företag?</h2>
                            <p className="virtual-text">
                                Det finns flera skäl till att det är en bra idé att anlita just oss när du behöver hjälp med en renovering i Norrort eller någon annan typ av byggprojekt. Dessa inkluderar bland annat följande:
                            </p>
                            <ul className='invest-text'>
                                <li className='mb-3'>  Vi som arbetar här har oerhört mycket erfarenhet av branschen!</li>
                                <li className='mb-3'>Vår långa erfarenhet innebär att vi  också    har        oerhört mycket kunskap, detta oavsett om det gäller en renovering i Norrort eller någon annan typ av byggprojekt!</li>
                                <li className='mb-3'>  Vi erbjuder våra tjänster till dig som är mån om att slutresultatet ska uppnå högsta möjliga standard!</li>
                            </ul>
                            <div className="invest-card-sub-left-bottom">
                                <div className="i-l-b-sub">
                                    <div className="i-l-b-sub-circle">
                                        <img src={Percentage} alt="" />
                                        <img className='in-bene-img' src={Increase} alt="" />
                                    </div>
                                    <h1 className="i-l-sub-title">7.4% </h1>
                                    <h2 className='i-l-sub-sm-title'>autem vel eum </h2>
                                </div>
                                <div className="i-l-b-sub">
                                    <div className="i-l-b-sub-circle">
                                        <img src={Buildings} alt="" />
                                        <img className='in-bene-img' src={Search} alt="" />
                                    </div>
                                    <h1 className="i-l-sub-title">453+</h1>
                                    <h2 className='i-l-sub-sm-title'>autem vel eum </h2>
                                </div><div className="i-l-b-sub">
                                    <div className="i-l-b-sub-circle">
                                        <img className='dollar-bg' src={Dollar} alt="" />
                                        <img className='in-bene-img' src={Tick} alt="" />
                                    </div>
                                    <h1 className="i-l-sub-title">7,980 </h1>
                                    <h2 className='i-l-sub-sm-title'>autem vel eum </h2>
                                </div>
                            </div>
                        </div>
                        <div className="invest-card-sub-right">
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
                            <div className="d-flex align-items-center">
                                <input type="radio" />
                                <p className='mb-0 ps-2 radio-text'>Jag godkänner  <Link>integritetspolicyn</Link></p>
                            </div>
                            <div className="my-5">
                                <button className='reg-btn border-0'>Gratis offert</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Invest;