import './App.css';
import Card from './components/Card';
import './components/block.css';
import React, { Component } from 'react';


const Homepage = () => {
  return (
    <div className="App" data-theme='light'>
      <div className="header">
        <h1 style={{ fontSize: "3rem", fontWeight: 'bold' }}>Lauren Kemperman</h1>
        <h2>Civic Technologist | Graduate Student @ ATLAS Institute</h2>
      </div>


      <Card />
      <div className='header' style={{ paddingTop: 25 }}>
        <h2>ABOUT</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 10 }}>

        <div className='header'>

          <div className='block'>
            <p style={{ fontWeight: 'lighter', fontSize: "1.2rem", textAlign: "left" }}>My name is Lauren Kemperman and I am a graduate student at ATLAS institute at CU Boulder in Social Impact Technology & Design and Senior Software Engineer at Code for America. I am focused on delivering technology solutions which improve the uptake and user experience, especially for marginalized groups, for accessing essential services like government benefits. I am also interested in exploring how smart technology policy can be used to alleviate issues which impact service design and delivery. My journey at ATLAS, paired with my role at Code for America, is working towards being a more well-rounded technologist in the social impact space by developing and refining my own design practice, and building frameworks to co-design policy and technology with diverse groups of people for long-term impact. </p>
          </div>
        </div>
        {/* <hr></hr> */}
      </div>

    </div>
  );
}

export default Homepage;
