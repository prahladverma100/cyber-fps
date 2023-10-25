import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import game_img from '../assets/image/game_img.png'

function What() {
  return (
      <div className='bg_layer min-vh-100 align-items-center d-flex'>
          <Container>
              <Row>
                  <Col lg={6}>
                      <h3 className='cyb_font'>What is <span className='cyb_font1 line2 position-relative pb-2'>CyberFPS</span> </h3>
                      <p className='text-font pt-3'>CyberFPS is centered around 5v5 Search & Destroy style combat with P2E mechanics featuring the $AMMO Token and deep integrations within the CryptoStraps ecosystem.</p>
                      <p className='text-font'>CyberFPS pits 2 teams of 5 players against each other with the objective being to attack or defend depending on which side you start on. This "Search & Destroy" style combat has been implemented in many popular FPS titles and is a high-skill cap game mode.</p>
                  </Col>
                  <Col lg={6}>
                      <img className='w-100' src={game_img} alt="" />
                  </Col>

              </Row>
        </Container>
    </div>
  )
}

export default What