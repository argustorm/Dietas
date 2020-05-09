import React, {Component} from 'react';
import { NavbarComponent } from '../Components/Navbar';
import { SelectMenuType } from '../Components/SelectMenuType';
import { SelectMenu } from '../Components/SelectMenu';
import { PlatesCard } from '../Components/PlatesCard';

export class Home extends Component {
    state = {
        menuType: '',
        menuTypeSelected: false,
        menuSelected: false,
        idMenu: ''
    }

    _renderMenuSelect() {
        return <div className='select'>
                    <SelectMenu putSeason={this.state.menuType} getIdMenu={this._handleMenu}/>
                </div>
    }

    _renderContent() {
        return <div className='content'>
                    <PlatesCard putIdMenu={this.state.idMenu}/>
                </div>
    }

    _handleMenuType = (value) => {
        this.setState({menuType: value, menuTypeSelected: true})
    }

    _handleMenu = (value) => {
        this.setState({idMenu: value, menuSelected: true})
    }

    render() {
        return (
            <div>
                <NavbarComponent/>

                <div className="div-select">
                    <div className="select">
                        <SelectMenuType getSeason={this._handleMenuType}/>
                    </div>
                    {this.state.menuTypeSelected ? this._renderMenuSelect() : null}
                </div>
                {this.state.menuSelected ? this._renderContent() : null}
                
            </div>
        )
    }
}