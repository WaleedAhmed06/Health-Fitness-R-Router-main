import React from 'react'
import MainBody1 from '../Component/MainBody1'
import FooterComponent from '../Component/FooterComponent'
export default function About() {

  return (
    <div>
      <div style={{backgroundColor:"black",color:"white"}}>
        <h1 style={{textAlign:"center",padding:"10% 0 5% 0",fontFamily:"'Gill Sans', 'Gill Sans MT'"}}>ABOUT US</h1>
      <MainBody1/>
      <br/>
      <FooterComponent/>
      </div>
    </div>
  )
}
