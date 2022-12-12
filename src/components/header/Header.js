import React from 'react'
import './Header.css'
import CV from '../../assets/akram_magri.pdf'
import ME from "../../assets/me.png"
import {BsLinkedin} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

export const Header = () => {
  return (
    <header id='home'>
      <div className='container header--container'>
          <h5>Hello I'm</h5>
          <h1>Magri Akram</h1>
          <h5 className='text-light'>FullStack Developer</h5>
          <div className='CTA'>
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
          <div className='header-socials'>
            <a 
              href='https://www.linkedin.com/in/akram-magri-3a7a16210/' 
              alt="linkdin" 
              target="_blank" rel="noreferrer">
                <BsLinkedin/>
              </a>
            <a 
              href='https://www.facebook.com/akram.magri' 
              alt="facebook" 
              target="_blank" rel="noreferrer">
                <BsFacebook/>
              </a>
            <a 
              href='https://github.com/akram993' 
              alt="github" 
              target="_blank" rel="noreferrer">
                <BsGithub/>
              </a>
          </div>
          <div className='me'>
            <img src={ME} alt="img"></img>
          </div>
          <a href='#contact' className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;
