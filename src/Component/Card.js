import React from 'react';
import './Card.css';
export default function Card1({element1 , element2 , element3 , label1 ,label2 , label3 , label4 , label5 ,label6 }) {
  return (
    <>
      <section>
        <div class="card1">
            <div class="box">
            <a>{element1}</a>
          <h3 id='title'>{label1}</h3>
          <h3>{label2}</h3>
            </div>
            <div class="box">
            <a>{element2}</a>
          <h3 id='title'>{label3}</h3>
          <h3>{label4}</h3>
            </div>
            <div class="box">
            <a>{element3}</a>
          <h3 id='title'>{label5}</h3>
          <h3>{label6}</h3>
            </div>
        </div>
    </section>
    </>
   
  )
}
