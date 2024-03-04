import React, { useState } from 'react'
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addToList } from '../actions/listAction';

const ToDoAddForm = () => {
    const [list,setList] = useState('');
    const dispatch = useDispatch()

    const submit = (evt) => {
        evt.preventDefault()
        
        dispatch(addToList(list))
        setList('')

        console.log("Success");
    }

    return (
        <>
            <Form className='mx-2 my-2' onSubmit={submit}>
                <Form.Group controlId='inputTask'>
                    <Row>
                        <Col md={10}>
                            <FormControl 
                            type='text' 
                            placeholder='Enter your task name...' 
                            required 
                            value={list} 
                            onChange={(e)=> setList(e.target.value)}/>
                        </Col>

                        <Col md={2} className='text-start'>
                            <Button type='submit'>Add New Task!</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </>
    )
}

export default ToDoAddForm