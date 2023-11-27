import React, { useEffect, useState } from 'react'
// import './Container.css'
import posImage2 from '../HomePage/campus.png'
import posImage5 from '../images/DSC_0026.png'
import posImage12 from '../images/IMG_20191130_122714.png'
import posImage13 from '../images/DSC_0092.png'
import posImage14 from '../images/b.png'
import posImage15 from '../images/DJI_0006.png'



const Container = () => {


  return (

    <>
   <style>
    {`
     * {
      box-sizing: border-box;
    }
    
    body,
    html {
      overflow-x: hidden;
    }
    
    body {
      margin: 0;
      width: 100%;
      font-family: "Oswald", sans-serif;
      font-size: 12pt;
      font-weight: 400;
    }
    
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Bebas Neue", cursive;
    }
    
    a {
      text-decoration: none;
      transition: all 0.5s ease-in-out;
    }
    
    a:hover {
      transition: all 0.5s ease-in-out;
    }
    
    .we-are-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      width: 100%;
      height: 900px;
    }
    
    @media screen and (max-width: 860px) {
      .we-are-block {
        height: 2200px;
      }
    }
    
    @media screen and (max-width: 500px) {
      .we-are-block {
        height: 2300px;
      }
    }
    
    #about-us-section {
      background: #0c4c91;
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    @media screen and (max-width: 860px) {
      #about-us-section {
        flex-direction: column;
        justify-content: space-between;
      }
    }
    
    .about-us-image {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      overflow: hidden;
    
    }
    
    @media screen and (max-width: 860px) {
      .about-us-image {
        position: relative;
        width: 100%;
        height: 45%;
      }
    }
    
    @media screen and (max-width: 747px) {
      .about-us-image {
        height: 35%;
      }
    }
    
    @media screen and (max-width: 644px) {
      .about-us-image img {
        position: absolute;
        left: -220px;
      }
    }
    
    .about-us-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-evenly;
      width: 40%;
      height: 80%;
      margin-right: 850px;
      margin-left: 12px;
      z-index: 2;
      
    }
    
    @media screen and (max-width: 1353px) {
      .about-us-info {
        margin-right: 400px;
        width: 60%;
        background: #0c4c9199;
        padding: 0px 25px 0px 0px;
      }
    }
    
    @media screen and (max-width: 1238px) {
      .about-us-info {
        margin-right: 340px;
        width: 100%;
      }
    }
    
    @media screen and (max-width: 1111px) {
      .about-us-info {
        margin-right: 270px;
      }
    }
    
    @media screen and (max-width: 910px) {
      .about-us-info {
        margin-right: 150px;
      }
    }
    
    @media screen and (max-width: 860px) {
      .about-us-info {
        margin: 0px 0px 0px 0px !important;
        padding: 0px 20px 0px 20px !important;
        width: 100%;
        height: 55%;
        align-items: center;
      }
    }
    
    @media screen and (max-width: 747px) {
      .about-us-info {
        height: 65%;
      }
    }
    
    .about-us-info h2 {
      color: white;
      font-size: 40pt;
      text-align: right;
    }
    
    @media screen and (max-width: 860px) {
      .about-us-info h2 {
        text-align: center;
      }
    }
    
    .about-us-info p {
      color: white;
      font-size: 14pt;
      text-align: right;
    }
    
    @media screen and (max-width: 860px) {
      .about-us-info p {
        text-align: center;
      }
    }
    
    .about-us-info a {
      background-color: white;
      color: #0c4c91;
      width: 180px;
      text-align: center;
      padding: 15px 0px 15px 0px;
      font-size: 14pt;
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
    
    .about-us-info a:hover {
      background: #404140;
      color: white;
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
      transform: translateY(10px);
    }
    
    #history-section {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    @media screen and (max-width: 860px) {
      #history-section {
        flex-direction: column;
        justify-content: space-between;
      }
    }
    
    .history-image {
      position: absolute;
      top: 0;
      left: 0;
      max-width: 820px;
      height: 100%;
      overflow: hidden;
     
    }
       @media screen and (max-width: 860px) {
      .history-image {
        position: relative;
        width: 100%;
        height: 40%;
      }
    }
    
    @media screen and (max-width: 747px) {
      .history-image {
        height: 35%;
      }
    }
    
    @media screen and (max-width: 644px) {
      .history-image img {
        position: absolute;
        right: -220px;
      }
    }
    
    .history-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      width: 40%;
      height: 80%;
      margin-left: 850px;
      margin-right: 12px;
      z-index: 2;
      margin-top: 80px;
    }
    
    @media screen and (max-width: 1353px) {
      .history-info {
        margin-left: 400px;
        width: 60%;
        background: #ffffff99;
        padding: 0px 0px 0px 25px;
      }
    }
    
    @media screen and (max-width: 1238px) {
      .history-info {
        margin-left: 340px;
        width: 100%;
      }
    }
    
    @media screen and (max-width: 1111px) {
      .history-info {
        margin-left: 270px;
      }
    }
    
    @media screen and (max-width: 910px) {
      .history-info {
        margin-left: 150px;
      }
    }
    
    @media screen and (max-width: 860px) {
      .history-info {
        margin: 0px 0px 0px 0px !important;
        padding: 0px 40px 0px 40px !important;
        width: 100%;
        height: 60%;
        align-items: center;
      }
    }
    
    @media screen and (max-width: 747px) {
      .history-info {
        height: 65%;
      }
    }
    
    .history-info h2 {
      color: #0c4c91;
      font-size: 40pt;
      text-align: left;
    }
    
    @media screen and (max-width: 860px) {
      .history-info h2 {
        text-align: center;
      }
    }
    
    .history-info p {
      color: #0c4c91;
      font-size: 14pt;
      text-align: left;
    }
    
    @media screen and (max-width: 860px) {
      .history-info p {
        text-align: center;
      }
    }
    
    .history-info a {
      background-color: #0c4c91;
      color: white;
      width: 180px;
      text-align: center;
      padding: 15px 0px 15px 0px;
      font-size: 14pt;
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
    
    .history-info a:hover {
      background: #404140;
      color: white;
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
      transform: translateY(10px);
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* #Section {
      animation: fadeIn 1s ease-in-out;
    } */
    @media only screen and (max-width: 600px) {
      #Section {
        margin-left: 10px;
      }
    
      img {
        width: 80px;
      }
    
      h3 {
        margin-left: 10px;
      }
    
      p {
        margin-left: 10px;
      }
    }
    
    @media only screen and (min-width: 601px) and (max-width: 900px) {
      #Section {
        margin-left: 50px;
      }
    
      img {
        width: 100px;
      }
    
      h3 {
        margin-left: 50px;
      }
    
      p {
        margin-left: 50px;
      }
    }
    
    /* Add more media queries as needed */
    /* ///////////////////////////////////////////////////////////////// */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,


ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

.wrapper {
  display: flex;
  gap: 40px;
}

.card {
  position: relative;
  width: 350px;
  height: 250px;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  transition: .5s;
}

.card .front {
  transform: perspective(600px) rotateY(0deg);
  box-shadow: 0 5px 10px #fff;
}

.card .front img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-h1 {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  color: #fff;
  background: rgba(0, 0, 0, .4);
  text-align: center;
}

.card .back {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transform: perspective(600px) rotateY(180deg);
  background: rgb(3, 35, 54);
  padding: 15px;
  color: crimson;
  text-align: center;
  box-shadow: 0 5px 10px #fff;
}



.links {
  border-top: 1px solid crimson;
  height: 50px;
  line-height: 50px;
}

.link-a {
  color: crimson;
}

.card .back .text-h2 {
  font-size: 30px;
  letter-spacing: 2px;
}

.card .back .text-p {
  letter-spacing: 1px;
}

.card:hover .front {
  transform: perspective(600px) rotateY(180deg);
}

.card:hover .back {
  transform: perspective(600px) rotateY(360deg);
}
    `}
   </style>

      <br></br><br></br>
      <div className="we-are-block">
        <div id="about-us-section">
          <div className="about-us-image">
            <img
              src={posImage2}
              width={808}
              height={458}
              alt="Lobby Image"
            />
          </div>
          <div className="about-us-info">
            {/* <h2>We are Digital Upgrade</h2> */}
            <p>
              Sri Satya Sai Group of Institutions attracts large number of students from faraway places & States,
              due to quality of education at affordable cost, without any hidden fees policy. In its history of fourteen years,
              various Institutions under umbrella of Sri Satya Sai Group of Institutions were the only Institutes in Sehore &
              nearby six districts offering Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils.
              Majority of population is agriculture dependent & percentage of population living at low standard of living is 80.6.
              Growth rate recorded recently is 21.5%.
            </p>
            <a href="#" title="About Us Button">
              ABOUT US
            </a>
          </div>
        </div>
        <div id="history-section">
          <div className="history-image">
            <img
              src={posImage5}
              width={951}
              height={471}
              alt="Building Pic"
            />
          </div>
          <div className="history-info">
            <h2>Preserving Local History</h2>
            <p>
              Sri Satya Sai Campus, Sehore came into existence in year 1999 with Sri Satya Sai Institute of Science & Technology (SSSIST).
              SSSIST initially had three branches in engineering education with total intake of 180.
              In 2012, because of the vision of promoters, the Sehore Campus was operating twelve Colleges,
              having twenty undergraduate courses & twenty Postgraduate courses, one post-graduate Diploma course & one Diploma course,
              with total intake of 3054  students.
            </p>
            <a href="#" title="History Button">
              HISTORY
            </a>
          </div>
        </div>
      </div><br></br><br></br>
      <>
        <div className="wrapper">
          <div className="card">
            <div className="face front">
              <img
                src={posImage12}
                alt="city"
              />
              <h1 className="text-h1">Laboratory</h1>
            </div>
            <div className="face back">
              <h2 className="text-h2">Laboratory</h2>
              <p className="text-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat
                maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga
                eius accusamus harum cum unde natus.
              </p>
              <div className="links">
                <a className="link-a" href="#">
                  Details
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face front">
              <img
                src={posImage13}
                alt="city"
              />
              <h1 className="text-h1">Hostel</h1>
            </div>
            <div className="face back">
              <h2 className="text-h2">Hostel</h2>
              <p className="text-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat
                maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga
                eius accusamus harum cum unde natus.
              </p>
              <div className="links">
                <a className="link-a" href="#">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face front">
              <img
                src={posImage14}
                alt="city"
              />
              <h1 className="text-h1">Building</h1>
            </div>
            <div className="face back">
              <h2 className="text-h2">Building</h2>
              <p className="text-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat
                maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga
                eius accusamus harum cum unde natus.
              </p>
              <div className="links">
                <a className="link-a" href="#">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face front">
              <img
                src={posImage15}
                alt="city"
              />
              <h1 className="text-h1">Campus</h1>
            </div>
            <div className="face back">
              <h2 className="text-h2">Campus</h2>
              <p className="text-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat
                maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga
                eius accusamus harum cum unde natus.
              </p>
              <div className="links">
                <a className="link-a" href="#">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </>


      {/* <div id='Section' style={{ marginLeft: '150px' }}>

        <img style={{ width: '120px', marginLeft: "20px" }} src='https://goteachersintouch.com/wp-content/uploads/2021/06/graduation-cap.png' alt='' />
        <h3 style={{ fontWeight: "bolder", marginLeft: "150px", marginTop: '-65px' }}> 16000+ </h3>
        <p style={{ marginLeft: "150px" }}>students</p>

        <img style={{ width: '120px', marginLeft: "300px", marginTop: '-155px' }} src='https://assets-global.website-files.com/62164f49d41615f2747ae420/62827f197eb1776532379171_chalkboard-user-light.svg' alt='' />
        <h3 style={{ fontWeight: "bolder", marginLeft: "450px", marginTop: '-100px' }}> 950+ </h3>
        <p style={{ marginLeft: "450px" }}>Faculty</p>

        <img style={{ width: '120px', marginLeft: "620px", marginTop: '-165px' }} src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRhPl5ZCXnD8FvH4zxy-H9vS1AcW5M7117TBM9PVaLE2tdURZIc' alt='' />
        <h3 style={{ fontWeight: "bolder", marginLeft: '750px', marginTop: '-105px' }}> 850+ </h3>
        <p style={{ marginLeft: "750px" }}>Staff</p>

        <img style={{ width: '120px', marginLeft: "880px", marginTop: '-185px' }} src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSJe_QWwXBAkkahfPZJmN1a3FATT94G6N-dJDB6wAlWqX3-mi_u' alt='' />
        <h3 style={{ fontWeight: "bolder", marginLeft: '1000px', marginTop: '-105px' }}> 1100+ </h3>
        <p style={{ marginLeft: "1000px" }}>Projects</p>


      </div> */}
      <div>

      </div>


    </>
  )
}

export default Container;