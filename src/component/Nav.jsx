import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import cyber_fps from '../assets/image/cyber_fps.png'
import { Iconlogo, } from './icons'
import { Instalogo } from './icons'
import { Logo } from './icons'
import fps from '../assets/image/fps.png'
import fps_man from '../assets/image/fps_man.png'



  function Nav() {
     return (
       <div>
          <section className='bg_img'>
             <Container>
               <div className='d-flex justify-co align-items-center justify-content-between'>
                    <img className='logo_width cursor-pointer z-index' src={cyber_fps} alt="" />
                                          <input type="checkbox" id='iconbox' hidden />
                     <ul className='d-flex ps-0 gap-4 gap-lg-0  align-items-center mb-0 nav-lg-screen'>
                           <li className='position-relative navlink1s'><Link to className='nav_link nav_font navlink2s position-relative'>About</Link></li> 
                           <li className='position-relative navlink1s'><Link to className='nav_link nav_font navlink2s position-relative'>CryptoStraps</Link></li> 
                           <li className='position-relative navlink1s'><Link to className='nav_link nav_font navlink2s position-relative'>Team</Link></li> 
                           <li className='position-relative navlink1s'><Link to className='nav_link nav_font navlink2s position-relative'>Faq</Link></li> 
                           <li className='position-relative navlink1s'><Link to className='nav_link nav_font navlink2s position-relative'>Light Paper</Link></li> 
                      
                            <div className='d-flex align-items-center d-lg-none'>
                              <span className='cursor-pointer nav_twt'><Iconlogo /></span>
                             <span className='cursor-pointer px-3 nav_ins'><Instalogo /></span>
                             <span className='cursor-pointer nav_dis'><Logo /> </span>
                         </div>
                    </ul>
                      <div className='d-flex align-items-center d-none d-lg-block'>
                              <span className='nav_twt cursor-pointer'><Iconlogo /></span>
                             <span className='px-3 nav_ins cursor-pointer'><Instalogo /></span>
                             <span className='nav_dis cursor-pointer'><Logo /> </span>
                         </div>
                     <label for="iconbox">
                        <span></span>
                        <span></span>
                        <span></span>
                     </label>
                 </div>
          </Container>
     
           <section className='pt-5'>
        <Container>
               <Row className=''>
            <Col lg={6}>
                   <img className='w-50' src={fps} alt="" />
                   <p className='text_font pb-2 pb-lg-5'>Web3 Gaming Reimagined</p>
                   <div className='d-flex gap-4'>
                      <button className='btn1'>Get Started</button>
                   <button className='btn2 d-none d-sm-block'>Learn More</button>
                   </div>
                     <button className='btn2 mt-3 mb-3 d-sm-none'>Learn More</button>

                 </Col>
                 <Col lg={6}>
                   <img className='w-100' src={fps_man} alt="" />
                 </Col>
         </Row>
        </Container>
           </section>
         </section>
    </div>
  )
}

export default Nav