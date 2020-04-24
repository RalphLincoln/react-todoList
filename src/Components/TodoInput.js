import React, { Component } from 'react';
import uuid from 'react-uuid';
import TodoList from './TodoList'

export default class TodoInput extends Component {

    constructor(props) {
        super(props)

        this.state = {
            editItem: false,
            item: '',
            id: uuid(),
            items: []
        }
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item,
        }
        const updatedItems = [...this.state.items, newItem]
        // console.log(updatedItems)

        this.setState({
            items: updatedItems,
            item: '',
            id: uuid(),
            editItem: false
        })
    }

    render() {

        return (
            <div>
                <div className="card border-primary card-body my-3">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book"></i>
                                </div>
                            </div>
                            <input type="text" className='form-control  text-capitalize' placeholder='Add todo item' value={this.state.item} onChange={this.handleChange} />
                        </div>
                        <button className="btn btn-outline-primary btn-block mt-3 text-uppercase">add item</button>
                    </form>
                </div>
                <TodoList items={this.state.items} />
            </div>
        )
    }
}
