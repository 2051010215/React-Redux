import React from 'react'
import { Card } from 'react-bootstrap'
import ToDoAddForm from '../components/ToDoAddForm'
import ToDoList from '../components/ToDoList'
import CartList from '../components/CartList'
import UserList from '../components/UserList'

const Home = () => {
    return (
        <>
            <h1 className='text-center mb-5'>To Do List WebApp</h1>
            <Card className='text-center'>
                <Card.Header>
                    Simple To Do List Using React Redux
                </Card.Header>
                <ToDoAddForm/>
                <h3 className='text-center text-secondary mt-3'>Tasks List</h3>
                <ToDoList/>
                <CartList/>
                <UserList/>
            </Card>
        </>
    )
}

export default Home