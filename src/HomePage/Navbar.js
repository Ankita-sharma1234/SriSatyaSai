import React from "react";
import img from '../images/homeee.png';
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        {`
          body {
              font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
              animation: fadeIn 1s ease-in-out;
          }

          header {
              color: red;
              font-size: 1rem;
              display: flex;
              height: 100%;
              font-weight: 600;
              background-color: #0c4c91;
          }

          .main-div {
              padding: 0 5%;
          }

          header>div {
              padding: 1em 3%;
              display: flex;
              width: 100%;
              justify-content: space-between;
          }

          header>div>div>div {
              margin: 0 0.5em;
          }

          .s-p {
              margin-left: 5px;
              color: #FFFFFF;
          }

          .nav-li {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
          }

          h1>span {
              color: rgb(255, 111, 0);
          }

          .Top-bar {
              display: flex;
              padding: 1em 5%;
              margin: 0 auto;
              justify-content: space-between;
              background-color: #f9f9f1;
          }

          .Top-bar>div {
              padding-left: 1em;
          }

          .menu {
              align-self: flex-end;
          }

          .menu ul {
              display: flex;
              flex-direction: flex-end;
          }

          .menu ul li {
              list-style: none;
              padding: 0.5em 1em;
              margin: 0 0.25em;
          }

          .menu ul li hr {
              border: none;
              height: 0.25em;
              background-color: rgb(255, 111, 0);
              width: 0;
              transition: width 0.3s;
          }

          .menu ul li:hover hr {
              width: 100%;
          }

          .dropdown-content {
              display: none;
              position: absolute;
              background-color: #f9f9f9;
              min-width: 200px;
              border: 1px solid black;
          }

          .submenu {
              display: none;
              position: absolute;
              top: 50%;
              left: 100%;
              background-color: #f9f9f9;
              min-width: 200px;
              border: 1px solid black;
          }

          .dropbtn:hover .dropdown-content {
              display: block;
          }

          .submenu-trigger:hover+.submenu {
              display: block;
          }

          .dropdown-content a, .submenu a {
              display: block;
              padding: 12px 16px;
              text-decoration: none;
              color: #333;
          }

          .dropdown-content a:hover, .submenu a:hover {
              background-color: #ddd;
          }
        `}
      </style>
      <header>
        <div>
          <div className="d-flex">
            <img style={{ width: "35px", marginRight: '10px' }} src={img} alt="home icon" />
            <span className="s-p" style={{ marginLeft: '35px' }}>About</span>
            <span className="s-p" style={{ marginLeft: '35px' }}>Examination</span>
            <span className="s-p" style={{ marginLeft: '35px' }}>Download</span>
            <span className="s-p" style={{ marginLeft: '35px' }}>Career</span>
            <Link to="/erp"><span className="s-p" style={{ marginLeft: '35px' }}>ERP</span></Link>
          </div>
          <div className="nav-li">
            <div>LOGIN</div>
            <div>
              <span className="s-p">SIGNUP</span>
            </div>
          </div>
        </div>
      </header>
      <div className="Top-bar" >
        <div>
          <h1>
            <img style={{ width: '100%' }} src="https://www.sssutms.co.in/cms/Areas/Website/Content/images/logo21.png" alt="logo" />
          </h1>
        </div>
        <div className="menu">
          <ul>
            <li style={{ fontWeight: 'bolder', fontSize: '20px', color: 'orange' }}>
              Academic
              <hr />
            </li>
            <li className="dropbtn" style={{ fontWeight: 'bolder', fontSize: '20px', color: 'orange' }}>
              Research
              <hr />
            </li>
            <li style={{ fontWeight: 'bolder', fontSize: '20px', color: 'orange' }}>
              Admission
              <hr />
            </li>
            <li style={{ fontWeight: 'bolder', fontSize: '20px', color: 'orange' }}>
              Contact
              <hr />
            </li>
            <img src='https://www.g20.org/content/dam/gtwenty/header-footer/header/g20-logo.png' alt='g20 logo' height='60px' width='120px' style={{ marginLeft: '10px' }} />
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainNavbar;


