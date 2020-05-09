import React, {Component} from 'react';
import { Select } from 'antd';

const { Option } = Select;


export class SelectMenuType extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('http://localhost:20007/api/v1/menu/menutypes')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.setState({data})
                })
    }

    handleOnChange = (value) => {
        console.log(`selected ${value}`);
        this.props.getSeason(value);
    }

    _renderMenuTypes() {
        const {data} = this.state
        return data.map(type => {
            return (
                <Option value={type.code} key={type.code}>
                    {type.description}   
                </Option>
            )
        })
    }

    render() {
        return (
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a season"
                optionFilterProp="children"
                onChange={this.handleOnChange}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {this._renderMenuTypes()}
            </Select>
        )
    }
}