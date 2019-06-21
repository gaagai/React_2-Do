import React, { Component } from 'react'
import "./Todo.css";

export default class Todo extends Component {
    state = {
        isEditing: false,
        task: this.props.task
    }
    handleRemove = (id) => {
        this.props.removeTodo(this.props.id)
    }
    editing = (evt) => {
        this.setState({
            isEditing: !this.state.editing
        })
    }
    handleupdate = (evt) => {
        evt.preventDefault()
        this.props.update(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        })

    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })

    }
    handleToggle = () => {
        this.props.toggelComplete(this.props.id)
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.handleupdate}>
                        <input type="text" value={this.state.task} name='task' onChange={this.handleChange} />
                        <button >Save</button>
                    </form>

                </div>
            )
        } else {
            result = (
                <div className='Todo'>

                    <li className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
                        onClick={this.handleToggle}
                    >{this.props.task}</li>
                    <div>
                        <div className='Todo-buttons'>
                            <button onClick={this.editing}>
                                <i class='fas fa-pen' />
                            </button>
                            <button onClick={this.handleRemove}>
                                <i class='fas fa-trash' />
                            </button>
                        </div>

                    </div>

                </div>
            )
        }
        return result;
    }
}
