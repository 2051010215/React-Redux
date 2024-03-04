import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row> 
          <Col className='text-center mt-5'>
            This is Footer!
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer