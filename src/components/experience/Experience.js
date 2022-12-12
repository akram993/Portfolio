import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <div className='container experience--container'>
        <div className='experience--frontend'>
          <h3>Frontend Developement</h3>
          <div className='experience--content'>
            <article className='experience--details'>
              <BsPatchCheckFill className='experienced--details--icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experienced--details--icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experienced--details--icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experienced--details--icon'/>
              <div>

              <h4>BOOTSTRAP</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experienced--details--icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experienced--details--icon'/>
              <div>

              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience--backend'>
          <h3>Backend Developement</h3>
          <div className='experience--content'>
            <article className='experience--details'>
              <BsPatchCheckFill className='experienced--details--icon'/>
              <div>
                <h4>Node</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experienced--details--icon'/>
              <div>

              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experienced--details--icon'/>
              <div>

              <h4>Spring</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experienced--details--icon'/>
              <div>

              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experienced--details--icon'/>
              <div>

              <h4>RESTApi</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;