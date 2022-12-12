/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className='container contact--container'>
        <div className='contact--options'>

        <article className='contact--option'>
          <MdOutlineEmail className='contact--option--icon'/>
          <h4>Email</h4>
          <h5 className='text-light'>akrammagri3@gmail.com</h5>
          <a href='mailto:akrammagri3@gmail.com' target="_blank">Send a message</a>
        </article>
        <article className='contact--option'>
          <RiMessengerLine className='contact--option--icon'/>
          <h4>Messenger</h4>
          <h5 className='text-light'>akram magri</h5>
          <a href='https://facebook.com' target="_blank">Send a message</a>
        </article>
        <article className='contact--option'>
          <BsWhatsapp className='contact--option--icon'/>
          <h4>WhatsApp</h4>
          <h5 className='text-light'>0603263269</h5>
          <a href='mailto:akrammagri3@gmail.com' target="_blank">Send a message</a>
        </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows='7' placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;