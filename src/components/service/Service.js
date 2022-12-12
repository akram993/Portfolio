import React from 'react'
import './Service.css'
import {BiCheck} from 'react-icons/bi'

export const Service = () => {
  return (
    <section id='service'>
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className='container service--container'>
        <div className='service'>
          <div className='service--head'>
            <h3>UI/UX design</h3>
          </div>
          <ul className='service--list'>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Creating visual designs for websites using tools such as Figma.
              </p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Designing a website to provide an enjoyable and easy user experience.
              </p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Designing websites to be optimized for different devices and screen sizes.
              </p>
            </li>
          </ul>
        </div>
        <div className='service'>
          <div className='service--head'>
            <h3>Web Developement</h3>
          </div>
          <ul className='service--list'>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Writing code to develop websites and applications.
              </p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Managing content on a website, including text, images, and other media.
              </p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Optimizing a website to improve its ranking in search engine results.
              </p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Testing a website for usability, compatibility, and performance.
              </p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Providing space on a web server for a website to be accessed on the Internet.
              </p>
            </li>
          </ul>
        </div>
        <div className='service'>
          <div className='service--head'>
            <h3>Machine Learning</h3>
          </div>
          <ul className='service--list'>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Data preprocessing is a process of transforming raw data into a form that can be used by machine learning algorithms.
              </p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Model selection is the process of selecting the best model for a given problem. 
              </p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p> Evaluation is the process of assessing the accuracy and reliability of a model.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}


export default Service;