import React from 'react'
import { Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartAction'
import { products } from '../product'

const CartList = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.cartItems);
    const { cartList } = data
    console.log(cartList);

    const addCart = (id) => {
        dispatch(addToCart(id))
    }

    const addDelete = (id) => {
        dispatch(removeFromCart(id))
    }
    return (
        <>
            <h2 className='text-center text-secondary mt-5'>Orders</h2>
            <ListGroup className='p-2'>
                {products.map((items) => (
                    <ListGroupItem>
                        <Row>
                            <Col md={4} xs={4} className='text-start' >
                                {items.name}
                            </Col>
                            <Col md={4} xs={4} className='text-center' >
                                {items.price}
                            </Col>
                            <Col md={4} xs={4}>
                                <Button
                                    variant='primary'
                                    onClick={() => addCart(items.id)}
                                >
                                    Add To Cart!
                                </Button>
                            </Col>

                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>

            {cartList.length > 0 ? (
                <ListGroup> <h4 className='text-start ms-2 mt-3'>Cart:</h4>
                    {cartList.map((items,) => (
                        <ListGroupItem>
                            <Row>
                                <Col xs={4} md={4} className='text-start' >
                                    {products.find((i) => i.id === items.id).name}
                                </Col>
                                {items.quantity > 1 ? (<Col xs={4} md={4} className='text-start' >
                                    x{items.quantity}
                                </Col>) : (<Col xs={4} md={4} className='text-start' >
                                    x1
                                </Col>)}

                                {items.quantity === undefined ?
                                    (<Col xs={3} md={3} className='text-start' >{products.find((i) => i.id === items.id).price}</Col>)
                                    :
                                    (<Col xs={3} md={3} className='text-start' > {products.find((i) => i.id === items.id).price * items.quantity} </Col>)
                                }
                                <Col md={1} xs={1} className='px-1'>
                                    <Button
                                        variant='danger'
                                        onClick={() => addDelete(items.id)}
                                    >
                                        Delete
                                    </Button>
                                </Col>

                            </Row>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            ):(<h2 className='my-4'>You Dont Have Anything In Cart</h2>)}
        </>
    )
}

export default CartList