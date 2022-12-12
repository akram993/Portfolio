/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/Capture1.PNG'
import IMG3 from '../../assets/Capture6.PNG'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


export const Portfolio = () => {
  const data =[
    {
      id:1,
      img:IMG1,
      title:"Bitcoin Price Forecasting",
      github:"",
      live:"",
    },
    {
      id:2,
      img:IMG2,
      title:"Lyriks",
      github:"",
      live:"",
    },
    {
      id:3,
      img:IMG3,
      title:"Moviify",
      github:"",
      live:"",
    },
    {
      id:4,
      img:IMG4,
      title:"Bitcoin Price Forecasting",
      github:"",
      live:"",
    },
    {
      id:5,
      img:IMG5,
      title:"Bitcoin Price Forecasting",
      github:"",
      live:"",
    },
    {
      id:6,
      img:IMG6,
      title:"Bitcoin Price Forecasting",
      github:"",
      live:"",
    },
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio--container'>
        {data.map((item)=> (
          <article className='portfolio--item' key={item.id}>
          <div className='portfolio--item--img'>
            <img src={item.img} alt='immg'/>
          </div>
          <h3>{item.title}</h3>
          <a href={item.github} className='btn'>Github</a>
          <a href={item.live} className='btn btn-primary'>Live Demo</a>
        </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio;