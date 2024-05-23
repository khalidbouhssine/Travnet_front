import React from 'react';
import './css/DashboardHome.css';
import logo from './imgs/logo.png';
import { Bar,Pie  } from 'react-chartjs-2';
import 'chart.js/auto';
import MenuDashboardLeft from '../part/MenuDashboardLeft'; 
import MenuTop from '../part/MenuTop'; 



function DashboardHome() {
  const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'My First Dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        }],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true, // Start the y-axis from zero
            },
        },
    };

    const data2 = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
      }]
  };
  return (
    <div className="DashboardProfildPage">
      <MenuTop/>
      <div className="pageDashbord">
        <MenuDashboardLeft />
        <div className="rightpage">
          <div className="topRightpage">
            <div className="topRightpageCenter">
              <div className="topRightpageItem">
                <div className="TitleTopRightpageItem">Number of Rooms</div>
                <div className="NumberTopRightpageItem">389</div>
              </div>
              <div className="topRightpageItem">
                <div className="TitleTopRightpageItem">Reservations/Month</div>
                <div className="NumberTopRightpageItem">1326</div>
              </div>
              <div className="topRightpageItem">
                <div className="TitleTopRightpageItem">Profit/Month</div>
                <div className="NumberTopRightpageItem">127300 DH</div>
              </div>
            </div>
          </div>
          <div className="GrafPlace">
            <div className="GrafPlaceCenter">
              <div className="Graf"><Bar data={data} options={options} /></div>
              <div className="Graf Graf2"><Pie data={data2}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
