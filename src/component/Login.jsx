import React, { useState } from 'react';
import './css/Login.css'
import design from './imgs/design.jpg'
import returnIMG from './imgs/return.png'
import passwordIMG from './imgs/password.png'
import phoneIMG from './imgs/phone.png'
import emailIMG from './imgs/email.png'
import userIMG from './imgs/user.png'
import passwordShowIMG from './imgs/passwordShow.png'
import load from './imgs/load.png'
function Login() {
  const [divLogin, setDivLogin] = useState("translateX(0px)");
  const [divRegistre, setDivRegistre] = useState("translateX(1000px)");
  const [divValide, setDivValide] = useState("translateX(1000px)");

  const [passwordRegistre, setPasswordRegistre] = useState("password");
  const [passwordRegistreIMG, setPasswordRegistreIMG] = useState(passwordIMG);
  const [passwordLogin, setPasswordLogin] = useState("password");
  const [passwordLoginIMG, setPasswordLoginIMG] = useState(passwordIMG);
  
  // dataInputRegistre
  const [fullNameInpR, setFullNameInpR] = useState("");
  const [emailInpR, setEmailInpR] = useState("");
  const [phoneInpR, setPhoneInpR] = useState("");
  const [PasswordInpR, setPasswordInpR] = useState(""); 

  // dataInputLogin
  const [emailInpL, setEmailInpL] = useState("");
  const [passwordInpL, setPasswordInpL] = useState("");

  // messageDispRegistre
  const [dispVal, setDispVal] = useState("none"); 
  const [msgVal, setMsgVal] = useState(""); 
  const [bgVal, setBgVal] = useState("var(--colorIncorrect)"); 

  // messageDispLogin
  const [dispValL, setDispValL] = useState("none"); 
  const [msgValL, setMsgValL] = useState(""); 
  const [bgValL, setBgValL] = useState("var(--colorIncorrect)"); 

  //load
  const [textBtnR, setTextBtnR] = useState("flex"); 
  const [iconBtnR, setIconBtnR] = useState("flex"); 
  const [iconLoadR, setIconLoadR] = useState("none"); 

  //value of validation
  const [validinp, setValidinp] = useState(""); 

  const goRegistre =()=>{
    setDivLogin("translateX(-1000px)");
    setDivRegistre("translateX(0px)");
    setDivValide("translateX(1000px)");

  }
  const goLogin =()=>{
    setDivLogin("translateX(0px)");
    setDivRegistre("translateX(1000px)");
    MessageDisplay("none","","var(--colorIncorrect)");
    setDivValide("translateX(1000px)");
    inputsMakeItEmptyR();
  }
  const goValide =()=>{
    setDivValide("translateX(0px)");
    setDivLogin("translateX(-1000px)");
    setDivRegistre("translateX(1000px)");
  }
  const switchPasswordRegistre = ()=>{
    if(passwordRegistre==="password"){
      setPasswordRegistre("text");
      setPasswordRegistreIMG(passwordShowIMG);
    }else{
      setPasswordRegistre("password");
      setPasswordRegistreIMG(passwordIMG);
    }

  }
  const switchPasswordLogin = ()=>{
    if(passwordLogin==="password"){
      setPasswordLogin("text");
      setPasswordLoginIMG(passwordShowIMG);
    }else{
      setPasswordLogin("password");
      setPasswordLoginIMG(passwordIMG);
    }

  }
  const phoneValChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setPhoneInpR(value.slice(0, 10));
  }
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isPhoneValid = (str) => {
      return str.length === 10;
  };
  const isPasswordValid = (str) => {
      return str.length >= 8;
  };
  const inputsMakeItEmptyR=()=>{
    setFullNameInpR("");
    setEmailInpR("");
    setPhoneInpR("");
    setPasswordInpR("");
  }
  const MessageDisplay=(disp,msg,bg)=>{
    setDispVal(disp);
    setMsgVal(msg);
    setBgVal(bg);
  }
  const MessageDisplayLogin=(disp,msg,bg)=>{
    setDispValL(disp);
    setMsgValL(msg);
    setBgValL(bg);
  }
  const loadAnimR=(textBtnR,iconBtnR,iconLoadR)=>{
    setTextBtnR(textBtnR);
    setIconBtnR(iconBtnR);
    setIconLoadR(iconLoadR);
  }
  const verifierDataLogin=()=>{
    if(!(emailInpL===""||passwordInpL==="")){
      if(isEmailValid(emailInpL)){
        if(isPasswordValid(passwordInpL)){
          goValide();
        }else{
          MessageDisplayLogin("flex","Use 8 characters at least in the password","var(--colorIncorrect)")
        }
      }else{
        MessageDisplayLogin("flex","Email is not validated","var(--colorIncorrect)")
      }
    }else{
      MessageDisplayLogin("flex","Fill in all the fields","var(--colorIncorrect)")
    }
  }

  //verification Registre
  const verifierDataRegistre=()=>{
    loadAnimR("none","none","flex");
    if(!(fullNameInpR===""||emailInpR===""||phoneInpR===""||PasswordInpR==="")){
      if(isEmailValid(emailInpR)){
        if(isPhoneValid(phoneInpR)){
          if(isPasswordValid(PasswordInpR)){
            addAccUser(fullNameInpR,emailInpR,phoneInpR,PasswordInpR);
          }else{
            MessageDisplay("flex","Use 8 characters at least in the password","var(--colorIncorrect)");
            loadAnimR("flex","flex","none");
          }
        }else{
          MessageDisplay("flex","Phone number is not validated","var(--colorIncorrect)");
          loadAnimR("flex","flex","none");
        }
      }else{
        MessageDisplay("flex","Email is not validated","var(--colorIncorrect)");
        loadAnimR("flex","flex","none");
      }
    }else{
      MessageDisplay("flex","Fill in all the fields","var(--colorIncorrect)");
      loadAnimR("flex","flex","none");
    }
  }
  //connected with API
  const addAccUser= async (fullName,email,phone,password)=>{
    MessageDisplay("none","","var(--colorCorrect)");
    try{
      const response = await fetch('https://127.0.0.1:8000/accClient', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullName,email,phone,password }),
      });
      if (response.ok) {
          const responseData = await response.json();
          if(responseData.state){
            loadAnimR("flex","flex","none");
            MessageDisplay("flex","User added successfully","var(--colorCorrect)");
            inputsMakeItEmptyR();
          }else{
            MessageDisplay("flex","User already exists","var(--colorIncorrect)");
            loadAnimR("flex","flex","none");
          }
      }else{
        MessageDisplay("flex","Connection problem with the server1","var(--colorIncorrect)");
        loadAnimR("flex","flex","none");
      }
  }catch(error){
    MessageDisplay("flex","Connection problem with the server2","var(--colorIncorrect)");
    loadAnimR("flex","flex","none");
  }

  }


  return (
    <div className="login">
        <div className="placeFormAndTitles">
          <div className="LoginBox" style={{ transform: divLogin }}>            
            <div className="pageRegistre">
              <div className="menuRegistre">
                <span className='nameOfApp'>TRAVNET</span>
              </div>
              <div className="titleRegistre titleMargin">Welcome To Travnet</div>
              <div className="MessagePlace" style={{ display: dispValL,backgroundColor:bgValL }}>
                <span className='TextMessage'>{msgValL}</span>
              </div>
              <div className="placeInput">
                <div className="titleInp">Email</div>
                <div className="input">
                  <input type="text" className='inp' placeholder='abcd@gmail.com' value={emailInpL} onChange={(e)=>{setEmailInpL(e.target.value)}} />
                  <div className="placeIconeInp">
                    <img src={emailIMG} className="placeIconeInpImg" />
                  </div>
                </div>
              </div>
              <div className="placeInput">
                <div className="titleInp">Password</div>
                <div className="input">
                  <input type={passwordLogin} className='inp' placeholder='*************' value={passwordInpL} onChange={(e)=>{setPasswordInpL(e.target.value)}}/>
                  <div className="placeIconeInp BtnPassword" onClick={switchPasswordLogin}>
                    <img src={passwordLoginIMG} className="placeIconeInpImg" />
                  </div>
                </div>
              </div>
              <button className='btnRegistreForm' onClick={verifierDataLogin}>
                <span>Login</span> 
              </button>
              <div className="placequastionRegistre">
              I don't have an account?
                <span className='linkLogin' onClick={goRegistre}>Register</span>
              </div>
            </div>
          </div>

          <div className="RegistreBox" style={{ transform: divRegistre }}>
            <div className="pageRegistre">
              <div className="menuRegistre">
                <button onClick={goLogin} className='returnBtnRegistre'>
                  <img src={returnIMG} className="returnImg" />
                </button>
                <span className='nameOfApp'>TRAVNET</span>
              </div>
              <div className="titleRegistre">Create a new account</div>
              <div className="MessagePlace" style={{ display: dispVal,backgroundColor:bgVal }}>
                <span className='TextMessage'>{msgVal}</span>
              </div>
              <div className="placeInput">
                <div className="titleInp">Full Name</div>
                <div className="input">
                  <input type="text" className='inp' placeholder='Mouad ...' value={fullNameInpR} onChange={(e)=>{setFullNameInpR(e.target.value)}} />
                  <div className="placeIconeInp">
                    <img src={userIMG} className="placeIconeInpImg" />
                  </div>
                </div>
              </div>
              <div className="placeInput">
                <div className="titleInp">Email</div>
                <div className="input">
                  <input type="text" className='inp' placeholder='abcd@gmail.com' value={emailInpR} onChange={(e)=>{setEmailInpR(e.target.value)}} />
                  <div className="placeIconeInp">
                    <img src={emailIMG} className="placeIconeInpImg" />
                  </div>
                </div>
              </div>
              <div className="placeInput">
                <div className="titleInp">Phone</div>
                <div className="input">
                  <input type="text" className='inp' placeholder='0611223344' value={phoneInpR} onChange={phoneValChange} />
                  <div className="placeIconeInp">
                    <img src={phoneIMG} className="placeIconeInpImg" />
                  </div>
                </div>
              </div>
              <div className="placeInput">
                <div className="titleInp">Password</div>
                <div className="input">
                  <input type={passwordRegistre} className='inp' placeholder='*************' value={PasswordInpR} onChange={(e)=>{setPasswordInpR(e.target.value)}} />
                  <div className="placeIconeInp BtnPassword" onClick={switchPasswordRegistre}>
                    <img src={passwordRegistreIMG} className="placeIconeInpImg" />
                  </div>
                </div>
              </div>
              <button className='btnRegistreForm' onClick={verifierDataRegistre}>
                <span style={{ display: textBtnR}}>Create Account</span> 
                <img src={returnIMG} className="loginBtnImageForm" style={{ display: iconBtnR}} />
                <img src={load} className="loadImg" style={{ display: iconLoadR}} />
              </button>
              <div className="placequastionRegistre">
                Already have an account?
                <span className='linkLogin' onClick={goLogin}>Login</span>
              </div>
            </div>
          </div>

          <div className="LoginBox validationBox" style={{ transform: divValide }}>            
            <div className="pageRegistre">
              <div className="menuRegistre">
                <span className='nameOfApp'>TRAVNET</span>
              </div>
              <div className="titleRegistre titleMargin">Validate your Email</div>
              <div className="placeInput">
                <div className="inputPlace">
                  <input type="text" className='inpvalide' value={validinp} onChange={(e)=>{setValidinp(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}}/>
                </div>
              </div>
              <button className='btnRegistreForm' onClick={verifierDataLogin}>
                <span>Valid</span> 
              </button>
              <div className="placequastionValide">
              I don't have an account?
                <span className='linkLogin' onClick={goLogin}>Login</span>
              </div>
            </div>
          </div>

        </div>
        <div className="placeDesing">
          <div className="boxPlaceDesing">
            <img src={design} className="designImg" />
            <div className="divDegrader"></div>
          </div>
        </div>
    </div>
  );
}

export default Login;
