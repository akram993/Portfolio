import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Data = [
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée.'
  },
  {
    avatar:AVTR2,
    name:'Shatta Wale',
    review:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée.'
  },
  {
    avatar:AVTR3,
    name:'Kwame Despite',
    review:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée.'
  },
  {
    avatar:AVTR4,
    name:'Nana ama',
    review:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée.'
  },
]

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials--container'
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}
      >
        {Data.map(({avatar,name,review}, index)=> {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client--avatar'>
                <img src={avatar} alt="avatar1"/>
              </div>
              <h5 className='client--name'>{name}</h5>
              <small className='client--review'>{review}</small>
            </SwiperSlide>
          )
        } 
        )}
      </Swiper>
    </section>
  )
}


export default Testimonials;