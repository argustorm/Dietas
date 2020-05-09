import React, {Component} from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;


export class SelectMenu extends Component {
    static propTypes = {
        putSeason : PropTypes.string
    }

    state = {
        allMenus: []
    }

    handleOnChange = (value) => {
        console.log(`selected ${value}`);
        this.props.getIdMenu(value);
    }

    componentDidMount() {
        fetch( `http://localhost:20007/api/v1/menu/menu`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.setState({allMenus: data})
                })
    }

    componentWillReceiveProps(nextProps) {
        fetch('http://localhost:20007/api/v1/menu/menu')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.setState({allMenus: data})
                })
    }

    _renderMenuByMenuType() {
        const {allMenus} = this.state
        return allMenus.map(menu => {
            if (menu.menuTypeDesc === this.props.putSeason)
            {
                return (
                    <Option key={menu.id} value={menu.id}>
                        {menu.description}
                    </Option>
                )
            } else {
                return null
            }
        })
    }
    

    render() {
        return (
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select menu"
                optionFilterProp="children"
                onChange={this.handleOnChange}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {this._renderMenuByMenuType()}
            </Select>
        )
    }
}