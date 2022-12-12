import React from 'react'
import './About.css'
import ME from "../../assets/mee-about.jpeg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about--container'>
        <div className='about--me'>
          <div className='about--me--image'>
            <img src={ME} alt='img'></img>
          </div>
        </div>  
        <div className='about--content'>
            <div className='about--cards'>
              <div className='about--card'>
                <FaAward className='about--icon'/>
                <h5>Experience</h5>
                <small>2+ years working</small>
              </div>
              <div className='about--card'>
                <FiUsers className='about--icon'/>
                <h5>Clients</h5>
                <small>50+ worldwide</small>
              </div>
              <div className='about--card'>
                <VscFolderLibrary className='about--icon'/>
                <h5>Projects</h5>
                <small>10+ completed projects </small>
              </div>
            </div>
            <p>My name is Akram, and I'am a recent college graduate. I have a degree in Computer Science. I am passionate about professional growth. and I'm always looking for ways to learn more and expand my skillset. Feel free to contact me.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About;
