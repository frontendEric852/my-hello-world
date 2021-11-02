import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            list: []
        }
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleSumbit() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index) {
        // imutable
        const list = [...this.state.list];
        list.splice(index, 1);

        this.setState({
            list: list,
            inputValue: ''
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleSumbit.bind(this)}>Submit</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li 
                                    key={index}
                                    onClick={this.handleItemDelete.bind(this, index)}
                                >
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;