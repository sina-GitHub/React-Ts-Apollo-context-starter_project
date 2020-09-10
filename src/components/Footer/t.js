import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";
import "./style.css";

export default function App() {
  return (
    <footer>
      <div className='row justify-content-between'>
        <ul className='social-links my-auto mx-4 col'>
          <li className='facebook'>
            <span>
              <a href='javascript:void(0);' target='_blank'>
                <i className='fab fa-facebook-f'></i>
              </a>
            </span>
          </li>

          <li className='twitter'>
            <span>
              <a href='javascript:void(0);' target='_blank'>
                <i className='fab fa-twitter'></i>
              </a>
            </span>
          </li>

          <li className='google-plus'>
            <span>
              <a href='javascript:void(0);' target='_blank'>
                <i className='fab fa-google-plus-g'></i>
              </a>
            </span>
          </li>

          <li className='linkedin'>
            <span>
              <a href='javascript:void(0);' target='_blank'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </span>
          </li>
        </ul>

        <div className='row col'>
          <div className='information d-block'>
            <div className='info'>
              <h1>Sina WEB</h1>
              <h4>Sina is a fullstack JS Developer</h4>
              <h4>who likes Open-source and free softwares</h4>
              <h4>linux and cross platfrom software developement</h4>
              <h4 className=''>Address : Shiraz - bahonar university</h4>
            </div>
          </div>

          <div className='features d-block'>
            <h1>Features</h1>
            <Link to='/'>Main</Link>
            <Link to='/'>Home</Link>
            <Link to='/login'>About</Link>
            <Link to='/login'>Blog</Link>
          </div>
        </div>

        <div className='map my-auto mr-4 d-lg-block d-none'>
          <iframe
            className='map-iframe'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4680.8029584004225!2d52.54394998643145!3d29.583302356129426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDM1JzExLjYiTiA1MsKwMzInNDcuMiJF!5e0!3m2!1sen!2s!4v1591006956801!5m2!1sen!2s'
            frameBorder='0'
            allowFullScreen=''
            aria-hidden='false'
            tabIndex='0'
          ></iframe>
        </div>
      </div>
      <div className='copy-right row justify-content-around'>
        <p className='container text-center'>
          Copyright © 2020 Designed by
          <Link to='/'>Sina WEB</Link>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
