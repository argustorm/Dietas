import React, {Component} from 'react';
import { NavbarComponent } from '../Components/Navbar';
import { SelectMenuType } from '../Components/SelectMenuType';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';


export class MenuPage extends Component {
    state = {
        description: '',
        active: false,
        menuTypeCode: ''
    }

    // Funciona
    handleSeason = (value) => {
        this.setState({menuTypeCode: value})
    }

    // Funciona
    handleMenuNameChange = (e) => {
        this.setState({description: e.target.value})
    }

    //Funciona
    handleCheck = (e) => {
        this.setState({active: e.target.checked})
    }

    handleOnSubmit = (e) => {
        console.log(this.state)
        axios.post(`http://localhost:20007/api/v1/menu/savemenu`, this.state)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(error => {
                        console.log(error)
                    })
    }
    

    render() {
        return(
            <div>
                <NavbarComponent/>
                <div className="div-menu">
                    <Form className="form-menu">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" 
                                          placeholder="Enter menu name"
                                          onChange={this.handleMenuNameChange} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Season:</Form.Label>
                            <br/>
                            <SelectMenuType getSeason={this.handleSeason}/>
                            <br/><br/>
                            <div className="form-menu-divider">
                                <Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                    label="Available"
                                    onChange={this.handleCheck}
                                />
                                
                                    <Button onClick={this.handleOnSubmit}
                                            href="/home"
                                            className="btn-form-menu"
                                            variant="outline-info"
                                            >
                                        Create
                                    </Button>
                                
                            </div>
                        </Form.Group>
                    </Form> 
                </div>
            </div>
        )
    }
}