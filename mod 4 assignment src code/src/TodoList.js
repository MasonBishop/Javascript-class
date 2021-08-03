import React, { Component } from 'react'
class TodoList extends Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input placeholder="Task" />
                        <button type="submit"> Add Task </button>
                        <p> successfully added a new task!</p>
                        <p>Would you like to delete a task?</p>
                        <button type="submit"> Delete selected task </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default TodoList
