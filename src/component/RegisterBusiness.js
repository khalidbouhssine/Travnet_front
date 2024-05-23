import React,{useState} from 'react';
import './css/RegisterBusiness.css';
import bgLoginUser from "./imgs/bgLoginBusiness.jpg"
import logo from "./imgs/logo.png"
import { Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';


const RegisterBusiness = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [CIN, setCIN] = useState("");
    const [Country, setCountry] = useState("");
    const [Password, setPassword] = useState("");
    const [Patent, setPatent] = useState("");

    const Register=async()=>{
        let hashPassword =CryptoJS.SHA256(Password).toString();
        try {
            const response = await fetch('https://127.0.0.1:8000/accBusiness', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstName:FirstName,
                lastName:LastName,
                email:Email,
                phone:Phone, 
                cinOrPassport:CIN, 
                country:Country, 
                password:hashPassword,
                pattenteDehotele:Patent
            }),
            });
      
            if (response.ok) {
                const responseData = await response.json();
                if(!responseData.existUser){
                    if(responseData.stateStore){
                        addHotel(responseData.userId,Patent);
                    }else{
                        alert("Problem in sent data");
                    }
                }else{
                    alert("User already exist");
                }
              }else{
                  alert("Problem of connexion");
              }
        } catch (error) {
            alert("Problem of connexion");
        }
    }

    const addHotel=async(idUser,patent)=>{
        try {
            const response = await fetch('https://127.0.0.1:8000/addhotel', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id:patent,
                name:"XXXX",
                rate:4,
                location:"", 
                city:"", 
                description:"", 
                img:"", 
                idAccBussiness:idUser,
            }),
            });
      
            if (response.ok) {
                alert("Account business created successfully");
            }else{
                  alert("Problem of connexion1");
            }
        } catch (error) {
            alert("Problem of connexion2");
        }
    }

  return (
    <div className="LoginuserPage">
        <div className="formPlace formRegisterScroll">
            <div className="formPlaceCenter">
                <div className="logo">
                    <img src={logo} alt="logo" className='logoimg' />
                </div>
                <div className="inpPlace">
                    <div className="inpPlaceText">First Name</div>
                    <div className="inpPlaceInput">
                        <input type="text" className="inp" placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </div>
                </div>
                <div className="inpPlace">
                    <div className="inpPlaceText">Last Name</div>
                    <div className="inpPlaceInput">
                        <input type="text" className="inp" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}}/>
                    </div>
                </div>
                <div className="inpPlace">
                    <div className="inpPlaceText">Email</div>
                    <div className="inpPlaceInput">
                        <input type="text" className="inp" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                </div>
                <div className="inpPlace">
                    <div className="inpPlaceText">Phone</div>
                    <div className="inpPlaceInput">
                        <input type="text" className="inp" placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)}}/>
                    </div>
                </div>
                <div className="inpPlace">
                    <div className="inpPlaceText">CIN</div>
                    <div className="inpPlaceInput">
                        <input type="text" className="inp" placeholder="CIN" onChange={(e)=>{setCIN(e.target.value)}}/>
                    </div>
                </div>
                <div className="inpPlace">
                    <div className="inpPlaceText">Country</div>
                    <div className="inpPlaceInput">
                        <input type="text" className="inp" placeholder="Country" onChange={(e)=>{setCountry(e.target.value)}}/>
                    </div>
                </div>
                <div className="inpPlace">
                    <div className="inpPlaceText">Patent</div>
                    <div className="inpPlaceInput">
                        <input type="text" className="inp" placeholder="Patent" onChange={(e)=>{setPatent(e.target.value)}}/>
                    </div>
                </div>
                <div className="inpPlace">
                    <div className="inpPlaceText">Password</div>
                    <div className="inpPlaceInput">
                        <input type="password" className="inp" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                </div>
                <div className="BtnPlace">
                    <div className="BtnLogin" onClick={Register}>Register</div>
                </div>
                <div className="BtnPlaceHotel">
                    <Link to="/registeruser" className="BtnLoginHotels">Register | User</Link>
                </div>
                <div className="LinkToRegister">
                    <span className="questionText">Already have an account?</span>
                    <Link to="/loginbusiness" className="linkText">Login</Link>
                </div>
            </div>
        </div>
        <div className="image">
            <img src={bgLoginUser} alt="bgLoginUser" className="bgLoginUser" />
        </div>
    </div>
  );
};

export default RegisterBusiness;
