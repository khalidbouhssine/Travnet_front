import React ,{useState}from 'react';
import './css/Home.css';
import bghome from './imgs/bghome.jpg'
import travnet from './imgs/travnet.png'
import date from './imgs/date.png'
import location from './imgs/location.png'
import searchFleche from './imgs/searchFleche.png'
import menu from './imgs/menu.png'
import close from './imgs/close.png'
import des1 from './imgs/des1.jpg'
import des2 from './imgs/des2.jpg'
import Collection from '../part/Collection'
import Footer from '../part/Footer'

const Home = () => {
    const [MenuMobile, setMenuMobile] = useState("translateX(1500px)");
    const [MenuMobileBg, setMenuMobileBg] = useState("var(--colorBlackLowOpacity)");

    const closeMenu = ()=>{
        setMenuMobileBg("var(--colorVide)");
        setMenuMobile("translateX(1500px)")
    }
    const openMenu = ()=>{
        setMenuMobileBg("var(--colorBlackLowOpacity)");
        setMenuMobile("translateX(0px)")
    }
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
                    <div className="buttonOpenMenuMobile" onClick={openMenu}>
                        <img src={menu} alt="menu" className="iconMenu"/>
                    </div>
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
            <div className="gigTitle">Top trending hotel in worldwide</div>
            <div className="smollTitle">Discover the most trending hotels worldwide for an unforgettable experience.</div>
            <Collection/>
            <div className="MenuMobileList" style={{backgroundColor:MenuMobileBg,transform:MenuMobile}}>
                <div className="MenuMobileListCentre">
                    <div className="ButtonCloseMenuPlace">
                        <div className="ButtonCloseMenu" onClick={closeMenu}>
                            <img src={close} alt="close" className="closeBtnIcon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="gigTitle">Get promo for a cheaper price</div>
            <div className="offrePlace">
                <div className="offrePlaceItem">
                    <img src={des1} alt="des1" className="imagedes" />
                </div>
                <div className="offrePlaceItem">
                    <img src={des2} alt="des1" className="imagedes" />
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  );
};

export default Home;
