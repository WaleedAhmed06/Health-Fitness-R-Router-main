import React from 'react'
import FooterComponent from '../Component/FooterComponent'
import MainBody3 from '../Component/MainBody3'

export default function Blog() {
  return (
    <div >
    <div style={{backgroundColor:"black",color:"white"}}>
        <h1 style={{textAlign:"center",padding:"10% 0 5% 0",fontFamily:"'Gill Sans', 'Gill Sans MT'"}}>BLOG</h1>
      <MainBody3/>
      <br/>
      <FooterComponent/>
      </div>
    </div>
  )
}
