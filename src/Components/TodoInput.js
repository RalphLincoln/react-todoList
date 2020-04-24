import React, { Component } from 'react'

export default class TodoInput extends Component {

    constructor(props) {
        super(props)

        this.state = {
            editItem: false,
            item: ''
        }
    }

    handleChange = () => {
        console.log('Handle Change')
    }

    handleSubmit = () => {
        console.log('Handle submit')
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
            </div>
        )
    }
}
