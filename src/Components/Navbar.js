import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const LOGO = 'https://www.quironsalud.es/es/banners/267753-logopie.png  '
export class NavbarComponent extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home"><img
                    src={LOGO}
                    width="154"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/?menu">Menu</Nav.Link>
                <Nav.Link href="/?plate">Plate</Nav.Link>
                <Nav.Link href="/?allergy">Allergy</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        )}
}