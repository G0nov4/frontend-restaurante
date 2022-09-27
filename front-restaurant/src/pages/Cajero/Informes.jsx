import React, { Component } from 'react'
import { Table, Button, Col, Row, Container } from 'react-bootstrap';
import '../../public/css/cajero/facturacio.css';
import * as FaIcons from "react-icons/fa";

export default class Informes extends Component {
  render() {
    return (
      <>
        <div className='titulo'>
          <h2 className=''>Informes Generados</h2>
        </div>
        <Container fluid>
          <Row className="justify-content-center">

            <Col lg="10"><Table striped bordered hover >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Fecha</th>
                  <th>Total</th>
                  <th>Fecha de Ultima Impresion</th>
                  <th className='botones'></th>
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
                      <Row>
                        <Col><FaIcons.FaPrint></FaIcons.FaPrint></Col>
                        <Col>Imprimir</Col>
                      </Row>
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
