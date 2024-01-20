import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Banner = ({title,text}) => {
  return (
    <div className='about_banner'>
      <Row className="justify-content-center align-items-center w-100">
        <Col md={8} className='text-center'>
        <h2>{title}</h2>
        {text && <p>{text}</p>}

        </Col>
      </Row>
    </div>
  )
}

export default Banner