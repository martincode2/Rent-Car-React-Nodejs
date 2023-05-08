import React from "react";

import '../styles/dashboard.css'
import SingleCard from "../components/reuseanable/singleCard";
import MileChart from "../charts/MileChart";
import CarStatitsChart from "../charts/CarStatitsChart";
import Image1 from "../images/car.png";








const carObj = {
   title: 'Total Cars',
    totalNumber: 750,
    icon: 'ri-police-car-line'
}

const tripObj = {
    title: 'dail Booked',
     totalNumber: 1697,
     icon: 'ri-steering-2-line'
 }

 
 const clientObj = {
    title: 'Dail Trips',
     totalNumber: '85',
     icon: 'ri-user-line'
 }
 const distanceObj = {
    title: 'Kilometers Daily',
     totalNumber: 2167,
     icon: 'ri-timer-flash-line'
 }
 
 
 

const Dashboard = () => {
    return ( 

<div className="dashboard">
    <div className="dashboard_wrapp">
<div className="dashboard_cards">
<SingleCard item={carObj} />
<SingleCard item={tripObj} />
<SingleCard item={clientObj} />
<SingleCard item={distanceObj} />

</div>

<div className="stastics">
<div className="tats">
 <h3 className="stats_title"> Mile Statics</h3>

 <MileChart />
</div>

<div className="tats">
 <h3 className="stats_title"> Car Statics</h3>

 <CarStatitsChart />

</div>


</div>

<div className="recommend_cars-wrapper">

</div>


<div className="remmand_car_card">
<div className="recommand_car_top">

<h5><span><i class="ri-refresh-line"></i></span>74% Recommanded</h5>

</div>


<div className="recommand_card_image">

    <img src={Image1} alt="100%" width="200" />
</div>

<div className="recommand_card_bottom">

<h4>Min Audi</h4>

<div>
<div className="recommand_car_other">
<div>

</div>

</div>
<span>$23/h</span>
   
</div>
</div>

</div>

    </div>



    
</div>

    );
        

    
};
export default Dashboard;