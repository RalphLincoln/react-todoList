import React, { Component } from 'react'
import TodoItem from './TodoItem'


export default class TodoList extends Component {

    handleDelete = (id) => {
        console.log(id)
    }

    handleEdit = (id) => {
        console.log(id)
    }

    clearList = () => {

    }
    render() {
        const { items } = this.props
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo list</h3>
                {items.map(item => { return (<TodoItem key={item.id} title={item.title} handleDelete={() => this.handleDelete(item.id)} handleEdit={() => this.handleEdit(item.id)} />) })}
                <button className="btn btn-outline-danger btn-block text-uppercase mt-5" onClick={this.clearList}>clear list</button>
            </ul>
        )
    }
}
