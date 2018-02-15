import React, { Component } from 'react';

class TodoList extends Component{

    constructor(props,context){
        super(props,context)

        //the state object
        this.state={
            items:[]
        }
        
        //adding the class method
        this.addItem=this.addItem.bind(this)
    }

    //the method called when you submit form

    addItem(e){

    }
    render(){
        return(
            <div className="row">
            <form className="form-inline" onSubmit={this.addItem}>
                <div className="form-group">
                <input className="form-control" placeholder="enter task"
                ref={(a)=>this._inputElement=a}/>
                </div>
                <button type="submit" className="btn btn-success">ADD TASK</button>
            </form>

            </div>
        )

    }
}

export default TodoList