import PocketBase from 'pocketbase';

import React, { useState } from 'react'
import { useEffect } from 'react';
import { Table, Button, Col, Row, Container, Form, InputGroup, Modal } from 'react-bootstrap';
import '../../public/css/cajero/facturacio.css';
export default function Clientes() {
  // Conexion a pocketBase
  let clientPB = new PocketBase("https://pocketback.fly.dev/");

  // Constantes necesarias para manejo de datos
  const [show, setShow] = useState(false);
  const [cliente, setCliente] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [celular, setCelular] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [carnet, setCarnet] = useState("");

  const OnEmailChange = e => setEmail(e.target.value); 
  const OnPasswordChange = e => setPassword(e.target.value); 
  const OnTelefonoChange = e => setTelefono(e.target.value); 
  const OnCelularChange = e => setCelular(e.target.value); 
  const OnNombreChange = e => setNombre(e.target.value); 
  const OnApellidoChange = e => setApellido(e.target.value); 
  const OnCarnetChange = e => setCarnet(e.target.value); 


  // Eventos de Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Obtener Clientes
  function getClients() {
    clientPB.records.getFullList("cliente", 200, {
      expand: 'client'
    })
      .then(function (list) {
        setCliente(list)
      }).catch(function (error) {
        console.log(error)
      });
  }

  // Crear Clientes

  async function createClient(){
 
    const user = await clientPB.users.create({
      email: email,
      password: password,
      passwordConfirm: password,
    });
  await clientPB.records.create("cliente", {
    apellido,
    nombre,
    telefono,
    celular,
    email,
    carnet
  })
    .then(function (record) {
        console.log(record, "Usuario creado")
    }).catch(function (error) {
        console.log(error)
    });
    
    handleClose();
    window.location.reload();
  }

  useEffect(() => {
    getClients();
  }, [])


  return (
    <>
      <div className='titulo'>
        <h2 className=''>Clientes Añadidos</h2>
      </div>
      <Container >
        <Row className="justify-content-center align-items-center mb-3">
          <Col lg="7" >
            <InputGroup className="mb-3 aling-items-center">
              <Form.Control
                placeholder="Buscar..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="success" id="button-addon2" >
                Buscar
              </Button>
            </InputGroup></Col>
          <Col lg="3">
            <div className="d-grid gap-2">
              <Button variant="outline-success" size="lg" onClick={handleShow}>
                Añadir Cliente
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Registro de Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        onChange={OnEmailChange}
                      />
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        onChange={OnPasswordChange}
                      />
                      <Form.Label>Telefono</Form.Label>
                      <Form.Control
                        type="number"
                        onChange={OnTelefonoChange}
               
                      />
                      <Form.Label>Celular</Form.Label>
                      <Form.Control
                        type="number"
                        onChange={OnCelularChange}
                 
                      />
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={OnNombreChange}
       
                      />
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={OnApellidoChange}
      
                      />
                      <Form.Label>carnet</Form.Label>
                      <Form.Control
                        type="number"
                        onChange={OnCarnetChange}
                      />

                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                  </Button>
                  <Button variant="primary" onClick={createClient} >
                    Crear Cliente
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">

          <Col lg="10"><Table striped bordered hover >
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Telefono</th>
                <th>CI</th>
              </tr>
            </thead>
            <tbody>
              {/* Añadir lista de pedidos */}
              {
                cliente.map((client, index) => {

                  return (<tr key={client.id}>
                    <td><b>{index}</b></td>
                    <td>{client.nombre} {client.apellido}</td>
                    <td>{client.email}</td>
                    <td>{client.celular}</td>
                    <td>{client.telefono}</td>
                    <td>{client.carnet}</td>
                  </tr>)
                })
              }
            </tbody>
          </Table></Col>

        </Row>
      </Container>
    </>
  )
}
