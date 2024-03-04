import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Formcontainer = ({children}) => {
  return (
    <Container className='bg-light py-5'>
        <Row className='justify-content-md-center'>
            <Col sx={12} md={9}>
                {children}
            </Col>
        </Row>
    </Container>
  )
}

export default Formcontainer