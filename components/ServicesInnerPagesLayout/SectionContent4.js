import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SectionContent4 = ({children,slider}) => {
  return (
    <div className="my-5 pb-5">
      <Container fluid className="w-95">
        <Row className="justify-content-center text-center logo_slider_main pb-4">
            <Col md={9}>

          {children}
            </Col>

        </Row>
        <Row>
        <div className="pt-4 logo_slider">
      {slider}
    </div>
        </Row>
      </Container>
    </div>
  )
}

export default SectionContent4