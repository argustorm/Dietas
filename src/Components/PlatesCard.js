import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export class PlatesCard extends Component {
    static propTypes = {
        putIdMenu: PropTypes.string
    }
    
    state = {
        plates: []
    }

    componentDidMount() {
        fetch(`http://localhost:20007/api/v1/menu/${this.props.putIdMenu}/plates`)
                .then(res => res.json())
                .then(data => {
                    this.setState({plates: data});
                });
    }

    componentWillReceiveProps(nextProps) {
        fetch(`http://localhost:20007/api/v1/menu/${nextProps.putIdMenu}/plates`)
                .then(res => res.json())
                .then(data => {
                    this.setState({plates: data});
                });
    }

    _renderCardPlate() {
        const {plates} = this.state
        return plates.map(plate => {
            return (
                <div key={plate.id}>
                   <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{plate.plate_name}</Card.Title>
                            <Card.Text>
                                {plate.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card> 
                </div>
                
            )
        })
    }

    render() {
        return (
                <div>
                    {this._renderCardPlate()}
                </div>
        )
    }
}