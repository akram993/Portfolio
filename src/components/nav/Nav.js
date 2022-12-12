/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"


export const Nav = () => {
  const [activeNav , setActivNav] = React.useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActivNav('#')}  className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActivNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActivNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''} ><BiBook/></a>
      <a href='#service' onClick={() => setActivNav('#service')} className = {activeNav === '#service' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActivNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}


export default Nav;