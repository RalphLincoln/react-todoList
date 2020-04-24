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

    // The clear list function will set the list item array empty
    clearList = () => {
        this.setState({
            items: []
        })
    }

    handleDelete = (id) => {
        // This will remove the list item that meets this criteria. Then the rest of the list item will be rendered
        const filteredItems = this.state.items.filter(itemFound => itemFound.id !== id)

        // The array of list items will then be updated with the new list items
        this.setState({
            items: filteredItems
        })
    }

    handleEdit = (id) => {
        // This will remove the list item that meets this criteria. Then the rest of the list item will be rendered
        const filteredItems = this.state.items.filter(itemFound => itemFound.id !== id)

        // This will select the item that meets this criteria. Then we can manipulate it.
        const selectedItem = this.state.items.find(item => item.id === id)

        this.setState({
            items: filteredItems,
            // The input list item will be set to the selected list item, so that we can manipulate it
            item: selectedItem.title,
            // This is so that we do not lose the already created id for the list item.
            id: id,
            editItem: true
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
                        <button className={this.state.editItem ?
                            "btn btn-outline-success btn-block mt-3 text-uppercase" :
                            "btn btn-outline-primary btn-block mt-3 text-uppercase"}
                            disabled={this.state.item === '' ? true : false}>
                            {this.state.editItem ? "edit item" : "add item"}
                        </button>
                    </form>
                </div>
                <TodoList items={this.state.items} handleDelete={this.handleDelete} handleEdit={this.handleEdit} clearList={this.clearList} />
            </div>
        )
    }
}
