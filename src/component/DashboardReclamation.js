import React,{useState,useEffect} from 'react';
import './css/DashboardReclamation.css';
import MenuDashboardLeft from '../part/MenuDashboardLeft'; 
import MenuTop from '../part/MenuTop'; 

function DashboardReclamation() {
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [pageNumber, setPageNumber] = useState(1);
  const [maxtab, setMaxtab] = useState(1);
  const [accBuss, setAccBuss] = useState(0);
  const [patentHotel, setpatentHotel] = useState(0);
  const [roomsList, setRoomsList] = useState("");
  const currentDate = formatDate(new Date());
  const [dateUsed, setDateUsed] = useState(currentDate);



  const updateTable=async(pageNumber,accBussiness,patent)=>{
    setRoomsList("");
    try {
      const response = await fetch('https://127.0.0.1:8000/recuperChambres', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idAccBussiness:accBussiness,
          pattenteDeHotel:patent,
          page:pageNumber,
          dateFilter: dateUsed
      }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setMaxtab(responseData.totalChambres);
        if(responseData.chambresExistent!=0){
          if (responseData.chambres.length !== 0) {
            responseData.chambres.forEach(function (chamber) {
              let item = '<div class="trdiv"><div class="tritemdiv">' + chamber.numero_chambre.toString() + '</div><div class="tritemdiv">' + chamber.numeroEtage.toString() + '</div><div class="tritemdiv">' + ((chamber.available === 0) ? '<div class="yesDiv">YES</div>' : '<div class="noDiv">NO</div>') + '</div></div>';
              setRoomsList(prevRoomsList => prevRoomsList + item);
            });        
          }   
        }else{
          let item = '<div class="roomnexist">Hotel Don\'t have Rooms</div>';
          setRoomsList(prevRoomsList => prevRoomsList + item);
        }   
      }else{
          alert("Problem of connexion");
      }
    } catch (error) {
        alert("Problem of connexion");
    }
  }
  const plusPage=()=>{
    if(pageNumber<Math.ceil(maxtab/5)){
      updateTable(pageNumber+1,accBuss,patentHotel);
      setPageNumber(prev => prev + 1);
    }
  }
  const minusPage=()=>{
    if(pageNumber>1){
      updateTable(pageNumber-1,accBuss,patentHotel);
      setPageNumber(prev => prev - 1);
    }
  }

  const verifierAuth=()=>{
    if(localStorage.getItem('auth') !== null) {
      var savedData = localStorage.getItem('auth');
      var parsedData = JSON.parse(savedData);
      setAccBuss(parsedData.userId);
      setpatentHotel(parsedData.patent);
      updateTable(pageNumber,parsedData.userId,parsedData.patent);
  } else {
    window.location.href = "/LoginBusiness";
  }
  }
  useEffect(() => {
    verifierAuth();
  }, []);

  const searchByDate=()=>{
    updateTable(pageNumber, accBuss, patentHotel);
  }
  return (
    <div className="DashboardProfildPage">
      <MenuTop/>
      <div className="pageDashbord">
        <MenuDashboardLeft />
        <div className="rightpage">
          <div className="Allroom">
            <div className="MenuRoom">
                <div className="blocMenu blocMenuLeft">ALL Claim</div>
            </div>
            <div className="tableRoom">
                <div className="tableRoomCentre">
                    <div className="thdiv">
                        <div className="thitemdiv">Name</div>
                        <div className="thitemdiv">Floor</div>
                        <div className="thitemdiv">Room</div>
                    </div>
                    <div className="listTrdiv" dangerouslySetInnerHTML={{ __html: roomsList }}/>
                    <div className="pagenationPlace">
                      <div className="pagenationPlaceCentre">
                          <div className="BtnPagenation" onClick={minusPage}>-</div>
                          <div className="numberpagenation">{pageNumber}</div>
                          <div className="BtnPagenation" onClick={plusPage}>+</div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardReclamation;
