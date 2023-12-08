import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Container from '../Container'
import Button from '../Button'
import PlayButton from '../../static/images/play-button.svg'
import Assistant from '../../static/images/assistnt.svg'
import User from '../../static/images/Ellipse.svg'
import Envolope from '../../static/images/envolpse.svg'
import Lovely from '../../static/images/lovely.png'
import Check from '../../static/images/check.svg'
import graph from '../../static/images/graph.svg'
import HeaderBanner from './style'
const Index = () => {
  return (
    <HeaderBanner>
      <Container>
        <Row className="w-100 column-reverse">
          <Col md={12 } lg={6}>
            <div className="left-section">
              <h1 className="section-heading">
                <span>Studying</span> Online is now much easier{' '}
              </h1>
              <p className="paragraph">
                Skilline is an interesting platform that will teach you in more an interactive way
              </p>
              <div className="btn-wrapper d-flex align-items-center">
                <Button padding={'23px 24px'} text="Join for free" variant="primary" />
                <div className="play-box d-flex align-items-center">
                  <img className="mt-4 pointer" width="140px" height="140px" src={PlayButton} alt="no-play" />
                  <span> Watch how it works</span>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="right-section">
              <div className="assisted-student d-flex gap-3">
                <img src={Assistant} alt="no-icon" />
                <div className="d-flex flex-column text">
                  <span>250k</span>
                  <span>Assisted Student</span>
                </div>
              </div>
              <div className="experincee d-flex  gap-3">
                <div className="d-flex align-items-start gap-3">
                  <img src={User} alt="no-icon" />
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column text mb-2">
                      <span>User Experience Class</span>
                      <span>Today at 12.00 PM</span>
                    </div>
                    <Button
                      fontSize="20px"
                      variant="outlined"
                      backgroundColor="#D8587E"
                      text="Join Now"
                      padding="12px"
                    />
                  </div>
                </div>
              </div>
              <div className="graph d-flex gap-3">
                <img src={graph} alt="no-icon" />
              </div>
              <div className="admission d-flex gap-3">
                <img src={Check} alt="no-check" className="check-icon" />
                <div className="envolpe-box">
                  <img src={Envolope} alt="no-icon" />
                </div>
                <div className="d-flex flex-column text">
                  <span>Congratulations</span>
                  <span>Your admission completed</span>
                </div>
              </div>
              <img src={Lovely} alt="no-svg" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bootom-svg">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          class="xl:h-40 xl:w-full"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="#FFF"
          ></path>
        </svg>
      </div>
    </HeaderBanner>
  )
}

export default Index
