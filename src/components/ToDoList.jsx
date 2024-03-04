import React from 'react'
import { Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addDone, addInProcess, deleteFromList } from '../actions/listAction';

const ToDoList = () => {
    const dispatch = useDispatch()

    const data = useSelector((state) => state.todoItems)
    const { todoList } = data
    console.log(todoList);

    const deleteItem = (name) => {
        dispatch(deleteFromList(name))
    }

    const itemDone = (name) => {
        dispatch(addDone(name))
    }

    const itemInProcess = (name) => {
        dispatch(addInProcess(name))
    }


    if (todoList.length > 0) {
        return (
            <ListGroup className='p-2'>
                {todoList.map((list) => (
                    <ListGroupItem>
                        <Row>
                            <Col md={8} xs={8} className='text-start' >
                                {list.name}
                            </Col>
                            <Col md={2} xs={2}>
                                {list.complete === true ?
                                    <Button
                                        variant='success'
                                        onClick={() => itemInProcess(list.name)}
                                    >
                                        <i className='fas fa-check'></i>
                                    </Button> :

                                    <Button
                                        variant='danger'
                                        onClick={() => itemDone(list.name)}
                                    >
                                        <i class="fa-regular fa-circle-xmark"></i>
                                    </Button>}

                            </Col>
                            <Col md={2} xs={2}>
                                <Button
                                    variant='danger'
                                    onClick={() => deleteItem(list.name)}
                                >
                                    <i className='fas fa-trash'></i>
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
        )
    } else {
        return (<h2 className='my-4'>You've Done Everything</h2>)
    }
}

export default ToDoList