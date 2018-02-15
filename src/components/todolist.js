import React, { Component } from 'react';

class TodoList extends Component{
    render(){
        return(
            <div className="row">
            <form className="form-inline">
                <div className="form-group">
                <input className="form-control" placeholder="enter task"/>
                </div>
                <button type="submit" className="btn btn-success">ADD TASK</button>
            </form>

            </div>
        )

    }
}

export default TodoList