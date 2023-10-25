import React from 'react'
import { Container } from 'react-bootstrap'
import section_2img from '../assets/image/section_2img.png'
function About() {
  return (
      <div>
          <section className='pt-2 pb-lg-5 pb-2 p-lg-5'>
              <Container>
                  <div className='d-flex justify-content-center pt-2 pt-lg-5 pb-2 pb-lg-5'>
                      <h4 className='cyb_font position-relative line'>CyberFPS <span className='cyb_font1 position-relative line1'>Gameplay</span></h4>
                  </div>
                  <div>
                      <img className='w-100' src={section_2img} alt="" />
                  </div>
              </Container>
          </section>
    </div>
  )
}

export default About