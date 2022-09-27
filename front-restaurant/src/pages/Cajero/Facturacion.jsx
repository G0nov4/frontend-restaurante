import React, { Component } from 'react'
import { Table, Button, Col, Row, Container, Form } from 'react-bootstrap';
import '../../public/css/cajero/facturacio.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


export default class Facturacion extends Component {
    render() {
        return (
            <>
                <div className='titulo'>
                    <h2 className=''>Emicion de facturas</h2>
                </div>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col lg="3">
                            <Form className='buscador'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <h4>Buscar por:</h4>
                                    <Form.Text>Nombre del cliente</Form.Text>
                                    <Form.Control type="text" placeholder="Cliente" />
                                    <Form.Text>Numero del pedido</Form.Text>
                                    <Form.Control type="text" placeholder="Numero de pedido" />
                                    <Form.Text>Numero de Mesa:</Form.Text>
                                    <Form.Control type="number" placeholder="Mesa" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Buscar
                                </Button>
                            </Form>
                        </Col>
                        <Col lg="6"><Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Añadir lista de pedidos */}
                                <tr>
                                    <td></td>
                                    <td colSpan={2}>Total</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </Table></Col>
                        <Col lg="2">
                            <Container m-d="2">

                                <div className="d-grid gap-2">
                                    <Button>
                                        <h1><FaIcons.FaFileArchive /></h1>
                                        <h5>GUARDAR FACTURA</h5>
                                    </Button>
                                    <Button  variant="outline-danger" size="lg">
                                        BORRAR
                                    </Button>

                                </div>
                            </Container>

                        </Col>
                    </Row>
                </Container>
                <div className='titulo'>
                    <h2 className=''>Facturas Emitidas</h2>
                </div>
                <Container fluid>
                    <Row className="justify-content-center">
                       
                        <Col lg="10"><Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Cliente</th>
                                    <th>Fecha</th>
                                    <th>Importe</th>
                                    <th className='botones'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Añadir lista de pedidos */}
                                <tr>
                                    <td></td>
                                    <td>Total</td>
                                    <td>0</td>
                                    <td>fecha</td>
                                    <td ><div className="container" >
                                    <Button>
                                        <FaIcons.FaPrint></FaIcons.FaPrint>
                                        
                                    </Button>
                                    <Button  variant="danger">
                                        <AiIcons.AiFillDelete></AiIcons.AiFillDelete>
                                    </Button>

                                </div></td>
                                </tr>
                            </tbody>
                        </Table></Col>
                        
                    </Row>
                </Container>
            </>
        )
    }
}
