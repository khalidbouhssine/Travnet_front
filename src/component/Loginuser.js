import React ,{useState}from 'react';
import './css/Loginuser.css';
import bgLoginUser from "./imgs/bgLoginUser.jpg"
import logo from "./imgs/logo.png"
import { Link } from 'react-router-dom';


const Loginuser = () => {

  return (
    <div className="LoginuserPage">
        <div className="formPlace">
            <div className="formPlaceCenter">
                <div className="logo">
                    <img src={logo} alt="logo" className='logoimg' />
                </div>
                <div className="inpPlace">
                    <div className="inpPlaceText">Email</div>
                    <div className="inpPlaceInput">
                        <input type="text" className="inp" placeholder="Email"/>
                    </div>
                </div>
                <div className="inpPlace">
                    <div className="inpPlaceText">Password</div>
                    <div className="inpPlaceInput">
                        <input type="password" className="inp" placeholder="Password"/>
                    </div>
                </div>
                <div className="BtnPlace">
                    <div className="BtnLogin">Login</div>
                </div>
                <div className="BtnPlaceHotel">
                    <Link to="/loginbusiness" className="BtnLoginHotels">Login | Business</Link>
                </div>
                <div className="LinkToRegister">
                    <span className="questionText">I don't have an account?</span>
                    <Link to="/registeruser" className="linkText">Register</Link>
                </div>
            </div>
        </div>
        <div className="image">
            <img src={bgLoginUser} alt="bgLoginUser" className="bgLoginUser" />
        </div>
    </div>
  );
};

export default Loginuser;
