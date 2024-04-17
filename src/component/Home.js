import React from 'react';
import './css/Home.css';
import bghome from './imgs/bghome.jpg'
import travnet from './imgs/travnet.png'
import date from './imgs/date.png'
import location from './imgs/location.png'
import searchFleche from './imgs/searchFleche.png'

const Home = () => {
  return (
    <div className="Home">
        <div className="HomeCenter">
            <div className="Box">
                <img src={bghome} alt="bghome" className="bghomeImg" />
                <div className="Menu">
                    <img src={travnet} alt="travnet" className="logo" />
                    <div className="listMenu">
                        <div className="listMenuItem">Home</div>
                        <div className="listMenuItem">Services</div>
                        <div className="listMenuItem">Contact</div>
                        <div className="listMenuItem">About</div>
                        <div className="listMenuItem">Reclamation</div>
                        <div className="listMenuItem">Follow us</div>
                    </div>
                    <div className="signInBtn">Sign In</div>
                </div>
                <div className="form">
                    <div className="formCentre">
                        <div className="inpPlaceBox">
                            <div className="inpPlace">
                                <div className="NameInput">Location</div>
                                <div className="boxInp">
                                    <div className="placeIconeInp">
                                        <img src={location} alt="location" className="IconeImgInp" />
                                    </div>
                                    <div className="inpForm">
                                        <input type="text" className="inputForm" placeholder="Find location" />
                                    </div>
                                </div>
                            </div>
                            <div className="inpPlace">
                                <div className="NameInput">Check-in Date</div>
                                <div className="boxInp">
                                    <div className="placeIconeInp">
                                        <img src={date} alt="location" className="IconeImgInp" />
                                    </div>
                                    <div className="inpForm">
                                        <input type="date" className="inputForm" />
                                    </div>
                                </div>
                            </div>
                            <div className="inpPlace">
                                <div className="NameInput">Check-out Date</div>
                                <div className="boxInp">
                                    <div className="placeIconeInp">
                                        <img src={date} alt="location" className="IconeImgInp" />
                                    </div>
                                    <div className="inpForm">
                                        <input type="date" className="inputForm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filtreAndBtn">
                            <div className="filterPlace">
                                <div className="wordFilter">Filter:</div>
                                <div className="BtnFilter">Hotels</div>
                                <div className="BtnFilter">Villas</div>
                                <div className="BtnFilter">Appartements</div>
                                <div className="BtnFilter">Travel Agency</div>
                            </div>
                            <div className="ButtonSearch">
                                <div className="SearchText">Search</div>
                                <div className="IconSearch">
                                    <img src={searchFleche} alt="searchFleche" className="IconSearchImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
