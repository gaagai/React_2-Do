import React, { Component } from 'react'
import uuid from 'uuid/v4'
import "./NewTodoForm.css";

export default class NewTodoForm extends Component {
    state = {
        task: ''
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.createTodo({ ...this.state, id: uuid(), completed: false })
        this.setState({
            task: ''
        })
    }
    render() {
        return (
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New ToDo</label>
                <input
                    type='text'
                    placeholder="New ToDo"
                    id='task'
                    name='task'
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Task</button>
            </form>
        )
    }
}
