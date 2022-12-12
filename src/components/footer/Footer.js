/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer--logo'>MyPortfolio</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testamonials">Testamonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer--socials'>
        <a href="hhtps://facebook.com" alt=""><FaFacebookF/></a>
        <a href='hhtps://instagram.com' alt=""><FiInstagram/></a>
        <a href='hhtps://twitter.com' alt=""><IoLogoTwitter/></a>
      </div>
      <div className='footer--copyright'>
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;