import React from 'react'
import './Home.css'
import Img from '../../img/21414648_1951713455047131_7292530918622773793_o copy.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Animation from '../Animation/Animation'

const Home = () => {
  return (
    <>
      <section className="home section grid">
        <Animation />
        <img src={Img} alt="" className="home_img" />
        <div className="home_content">
          <div className="home_data">
            <h1 className="home_title">
              <span>i'm vivek naik.</span> web designer
            </h1>
            <p className="home_desc">
              i'm a graphic designer, web designer & front-end developer focused on crafting clean & user-friendly
              experinces, i am passionate about building excellent sofware that improves the lives of those around
              me.
            </p>
            <Link to={'/about'} className='button'>
              more about me{''}
              <span className="button_icon">
                <FaArrowRight className='button_icon'/>
              </span>
            </Link>
          </div>
        </div>
        <div className="color_block"></div>
      </section>
    </>
  )
}

export default Home
