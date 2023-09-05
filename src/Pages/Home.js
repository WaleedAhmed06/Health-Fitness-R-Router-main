import React from 'react'
import './Home.css';
import MainBody1 from '../Component/MainBody1';
import MainBody2 from '../Component/MainBody2';
import MainBody3 from '../Component/MainBody3';
import MainBody4 from '../Component/MainBody4';
import FooterComponent from '../Component/FooterComponent';
export default function Home() {
  return (
    <div>
       
     <section>
        <div class="banner1">
            <p><span id="line"></span>WITH PAKRICK POTTER</p>
            <h1 >BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE.</h1>
            <button id="btn1">BECOME A MEMBER</button>
        </div>
    </section>
      <MainBody1/>
      <br/>
      <MainBody2/>
      <br/>
      <MainBody3/>
      <br/>
      <MainBody4/>
      <br/>
      <FooterComponent/>
    </div>
  )
}
