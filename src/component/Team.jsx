import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import collin from '../assets/image/collin.png'
import pharaox from '../assets/image/pharaox.png'
import zach from '../assets/image/zach.png'
import arlen from '../assets/image/arlen.png'


function Team() {
  return (
      <div className='min-vh-100 justify-content-center align-items-center d-flex'>
          <Container>
              <div className='d-flex justify-content-center'>
                  <h4 className='cyb_font  position-relative team_line pt-3 pb-3'>Team</h4>
              </div>
              <Row className='pt-5 '>
                  <Col className='text-center text-sm-start' sm={6}  lg={3}>
                      <img className='w-100 img_hover cursor-pointer' src={collin} alt="" />
                      <p className='font_size mb-0 pt-3'>Collin</p>
                      <p className='font_size1'>Founder</p>
                  </Col>
                  <Col className='text-center text-sm-start' sm={6}  lg={3}>
                      <img className='w-100 cursor-pointer img_hover' src={pharaox} alt="" />
                      <p className='font_size mb-0 pt-3'>Pharaox</p>
                      <p className='font_size1'>Founder</p>
                  </Col>
                  <Col className='text-center text-sm-start' sm={6}  lg={3}>
                    
                      <img className='w-100 cursor-pointer img_hover' src={zach} alt="" />
                        <p className='font_size mb-0 pt-3'>Zach</p>
                      <p className='font_size1'>CM</p>
                  </Col>
                  <Col className='text-center text-sm-start' sm={6} lg={3}>
                      <img className='w-100 cursor-pointer img_hover' src={arlen} alt="" />
                      <p className='font_size pt-3 mb-0'>Arlen</p>
                      <p className='font_size1'>CM</p>
                  </Col>
              </Row>
          </Container>   
    </div>
  )
}

export default Team