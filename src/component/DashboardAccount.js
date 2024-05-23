import React,{useState} from 'react';
import './css/DashboardAccount.css';
import { Link } from 'react-router-dom';
import star from './imgs/etoile.png'
import user_c from './imgs/user_c.png'
import phone_c from './imgs/phone_c.png'
import patent_c from './imgs/brevet_c.png'
import world_c from './imgs/world_c.png'
import city_c from './imgs/city_c.png'
import location_c from './imgs/location_c.png'
import profilbg from './imgs/profilbg.png'
import profilBusi from './imgs/profilBusi.jpg'
import modify from './imgs/modify.png'
import MenuDashboardLeft from '../part/MenuDashboardLeft'; 
import MenuTop from '../part/MenuTop'; 



function DashboardAccount() {
  const [HotelName, setHotelName] = useState("");
  const [Description, setDescription] = useState("");
  const [Rate, setRate] = useState("");
  const [Accbuss, setAccbuss] = useState("");
  const [Phonebuss, setPhonebuss] = useState("");
  const [Patent, setPatent] = useState("");
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");
  const [Address, setAddress] = useState("");


  const getDataRoom =async(idAcc)=>{
    try {
        const response = await fetch('https://127.0.0.1:8000/disprofile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            idAccBussiness:idAcc
        }),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(idAcc);
            console.log(responseData);
            if(responseData.stateDataAccBussiness){
                setHotelName(responseData.hotel.name);
                setDescription(responseData.hotel.description);
                setRate(responseData.hotel.rate);
                setAccbuss(responseData.accBusiness.fullName);
                setPhonebuss(responseData.accBusiness.phone);
                setPatent(responseData.accBusiness.patenteDeHotel);
                setCountry(responseData.accBusiness.country);
                setCity(responseData.hotel.city);
                setAddress(responseData.hotel.location);
            }else{
                alert("Problem user not exist");
            }
          }else{
              alert("Problem of connexion");
          }
    } catch (error) {
        alert("Problem of connexion");
    }
  }
  const verifierAuth=()=>{
    if(localStorage.getItem('auth') !== null) {
      var savedData = localStorage.getItem('auth');
      var parsedData = JSON.parse(savedData);
      getDataRoom(parsedData.userId);
  } else {
    window.location.href = "/LoginBusiness";
  }
  }
  verifierAuth();

  
  return (
    <div className="DashboardProfildPage">
      <MenuTop/>
      <div className="pageDashbord">
        <MenuDashboardLeft />
        <div className="rightpage">
          <div className="couverimg">
            <div className="imgAccount">
              <img src={profilBusi} alt="profilBusi" className="profilBusi" />
            </div>
            <Link to="/dashboardaccountmodif" className="buttonModify">
              <img src={modify} alt="modify" className="modifyIcon" />
              <span className="modifyText">Modify</span>
            </Link>
            <img src={profilbg} alt="profilbg" className="profilbg" />
          </div>
          <div className="nameAccount">{HotelName}</div>
          <div className="descriptionPlace">
            <div className="descriptionPlaceCenter">{Description}</div>
          </div>
          <div className="Price">{Rate} starts</div>
          <div className="Price stars">
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
          </div>
          <div className="caractirestic">
            <div className="caractiresticItem">
                <img src={user_c} alt="iconeCaract" className="iconeCaract" />
                <div className="TextCaractirestic">User: <span className="infAccountblack">{Accbuss}</span></div>
            </div>
            <div className="caractiresticItem">
                <img src={phone_c} alt="iconeCaract" className="iconeCaract" />
                <div className="TextCaractirestic">Phone: <span className="infAccountblack">{Phonebuss}</span></div>
            </div>
            <div className="caractiresticItem">
                <img src={patent_c} alt="iconeCaract" className="iconeCaract" />
                <div className="TextCaractirestic">Patent: <span className="infAccountblack">{Patent}</span></div>
            </div>
            <div className="caractiresticItem">
                <img src={world_c} alt="iconeCaract" className="iconeCaract" />
                <div className="TextCaractirestic">Country: <span className="infAccountblack">{Country}</span></div>
            </div>
            <div className="caractiresticItem">
                <img src={city_c} alt="iconeCaract" className="iconeCaract" />
                <div className="TextCaractirestic">City: <span className="infAccountblack">{City}</span></div>
            </div>
            <div className="caractiresticItem marginBottomDiv">
                <img src={location_c} alt="iconeCaract" className="iconeCaract" />
                <div className="TextCaractirestic">Address: <span className="infAccountblack">{Address}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAccount;
