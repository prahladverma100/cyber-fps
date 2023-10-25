import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import cs_img from '../assets/image/cs_img.png'
function Cryptostraps() {
  return (
      <div className='bg-black pt-5 pb-5'>
          <Container>
        <Row className='pt-2 pt-lg-5 pb-2 pb-lg-5 d-flex align-items-center'>
                  <Col md={6}>
                      <img className='w-100' src={cs_img} alt="" />
                  </Col>
                  <Col md={6}>
            <h3 className='cyb_font text-white line2 position-relative pb-2
            '>CryptoStraps </h3>
                    <p className='font'> CryptoStraps are firearms pushing the boundaries of 3D animated art. CyberFPS will be powered by CryptoStraps $AMMO and is directly integrated with the existing CryptoStraps NFTs. You will be able to use CryptoStraps NFTs in-game and the visuals/graphics of CyberFPS are designed by the CryptoStraps 3D Studio.</p>
                      
                  </Col>
             </Row>
          </Container>
          
    </div>
  )
}

export default Cryptostraps