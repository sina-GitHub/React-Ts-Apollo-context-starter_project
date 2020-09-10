import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

import mainPicture from "../../assets/images/mocup.png";
import gear from "../../assets/svg/gear.svg";
import marketing from "../../assets/svg/marketing.svg";
import send from "../../assets/svg/send.svg";
import sharing from "../../assets/svg/sharing.svg";

import Card from "../../components/Card/Card";

export default function Home() {
  return (
    <div>
      <main className='main-container'>
        {/* main-introduction */}
        <div className='row align-items-center'>
          <div className='col-lg-6 text-center main-intro align-align-self-start'>
            <h1 className='display-2'>Digi Sina</h1>
            <h3 className='mb-3'>Enterprize softwares for your business</h3>

            <Link to='/login' className='btn-gradient'>
              Have an order
            </Link>
            <Link to='/login' className='btn-gradient'>
              Read more
            </Link>
          </div>

          <div
            className='col-lg-6 d-none d-lg-block'
            style={{ marginLeft: "-15px" }}
          >
            <img src={mainPicture} alt='' srcSet='' />
          </div>
        </div>

        {/* Heading icond*/}

        <section id='home-heading' className='p-5'>
          <div className='dark-overlay'>
            <div className='row'>
              <div className='col'>
                <div className='container pt-5'>
                  <h1>Are You Ready To Get Started?</h1>
                  <p className='d-none d-md-block'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est eaque magni sit dolores. Nisi, dolor nam modi
                    perspiciatis consequatur soluta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* background img */}

        <section className='py-3 home-icons'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-lg-3 mb-4 text-center d-none d-lg-block'>
                <img
                  alt=''
                  srcSet=''
                  width='100px'
                  height='100px'
                  src={sharing}
                />
                <h3>Sharing Information</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, veniam.
                </p>
              </div>

              <div className='col-md-4 col-lg-3 mb-4 text-center'>
                <img alt='' srcSet='' width='100px' height='100px' src={gear} />
                <h3>Turnovers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, veniam.
                </p>
              </div>

              <div className='col-md-4 col-lg-3 mb-4 text-center'>
                <img alt='' srcSet='' width='100px' height='100px' src={send} />
                <h3>Chat Room</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, veniam.
                </p>
              </div>
              <div className='col-md-4 col-lg-3 mb-4 text-center'>
                <img
                  alt=''
                  srcSet=''
                  width='100px'
                  height='100px'
                  src={marketing}
                />
                <h3>Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, veniam.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='row justify-content-center pb-3'>
          <div className='col-lg'>
            <Card title='programming language' body='Typescript' />
          </div>

          <div className='col-lg'>
            <Card title='server side app' body='Apollo GraphQL' />
          </div>

          <div className='col-lg'>
            <Card title='client side app' body='NextJS SSR' />
          </div>
        </section>
      </main>
    </div>
  );
}
