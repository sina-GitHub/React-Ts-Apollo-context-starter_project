import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";
import "./copy-right.css";

export default function Footer() {
  return (
    <footer>
      <div className='footer-container row justify-content-between'>
        {/* social media links */}
        <div className='col-md-3 col-lg-2'>
          <ul className='social-links my-auto mx-4 d-block d-md-inline'>
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
        </div>

        {/* information and features */}
        <div className='col-md-9 col-lg-6'>
          <div className='row'>
            <div className='col-md'>
              <div className='information d-inline'>
                <div className='info'>
                  <h1>Sina WEB</h1>
                  <h4>Sina is a fullstack JS Developer</h4>
                  <h4>who likes Open-source and free softwares</h4>
                  <h4>linux and cross platfrom software developement</h4>
                  <h4 className='d-sm-block d-lg-none'>
                    Address : Shiraz - bahonar university
                  </h4>
                </div>
              </div>
            </div>

            <div className='col-md'>
              <div className='features d-inline'>
                <h1>Features</h1>
                <Link to='/' className='mt-3'>
                  Home
                </Link>
                <Link to='/about' className='mt-3'>
                  About
                </Link>
                <Link to='/register' className='mt-3'>
                  Register
                </Link>
                <Link to='/login' className='mt-3'>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* google maps */}
        <div className='d-sm-none d-md-none d-lg-block col-lg-4 mt-3'>
          <div className='map '>
            <iframe
              className='map-iframe'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4680.8029584004225!2d52.54394998643145!3d29.583302356129426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDM1JzExLjYiTiA1MsKwMzInNDcuMiJF!5e0!3m2!1sen!2s!4v1591006956801!5m2!1sen!2s'
              frameBorder='0'
              allowFullScreen={false}
              aria-hidden='false'
              tabIndex={0}
            ></iframe>
          </div>
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
