import React, { Component, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

const SearchComponent = () => {

    // setear los hooks de userState
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    // Funcion para traer los datos de la API
    const URL = 'https://pocketback.fly.dev/api/collections/cliente/records?expand=cliente';

    const showData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setUsers(data.items);
    }


    // Funcion de busqueda
    useEffect(() => {
        showData()
    }, [])


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            console.log(user)
                            console.log(user.client)
                            return(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{}</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            );   
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}


export default SearchComponent;