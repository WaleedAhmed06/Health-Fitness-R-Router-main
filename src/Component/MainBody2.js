import './MainBody2.css';
import React from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Card1 from './Card';


export default function MainBody2() {

    
  return (
    <div className='main-body2 my-5 py-5'>
      
<div className="container mt-5">
  <div className="row">
   
    <div className="col-md-6">
      <p className="mb-3 red-text"><span id="line"></span>OUR SERVICES FOR YOU</p>
      <hr/>
      <h2 className='custom-text3'>PUSH YOUR LIMITS FORWARD WE OFFER TO YOU</h2>
    </div>
    
 
    <div className="col-md-6 d-flex align-items-center">
      <button className="btn btn-danger ms-auto">More Services</button>
    </div>
  </div>
  
<section>
<Card1 
  element1={<FitnessCenterIcon/>} label1="QUALITY EQUIPMENT" label2="The sea freight service has grown considerably in recent years. We spend time getting to know your transportation needs."
  element2={<VolunteerActivismIcon/>} label3="HEALTH CARING" label4="The sea freight service has grown considerably in recent years. We spend time getting to know your transportation needs."
  element3={<AccessAlarmIcon/>} label5="GYM STRATEGIE" label6="The sea freight service has grown considerably in recent years. We spend time getting to know your transportation needs."
  />
    </section>
 
</div>
    </div>
  )
}
