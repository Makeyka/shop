import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Image, ListGroup } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'


const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id)

    return (
        <>
            <Link className="btn btn-light my-3" to="/"> Go Back </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {product.description} 
                    </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>
                                            {product.price}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        <strong>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button 
                                    type="button"
                                    className="btn-block"
                                    disabled={product.countInStock === 0}
                                    style={{cursor: product.countInStock === 0 && 'not-allowed'}}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
