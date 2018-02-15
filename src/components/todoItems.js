import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component{
    constructor(props,context){
        super(props,context);


    this.createTask=this.createTask.bind(this)
    this.delete=this.delete.bind(this)
    }

    createTask(item){
    return <li onClick={()=>this.delete(item.key)}
    key={item.key} className="well">{item.text}</li>
    }

    delete(key){
        this.props.delete(key)
    }


    render(){
        var todoListEntries=this.props.entries;
        var listItems=todoListEntries.map(this.createTask)
        return(
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <h1 className="text-center">MY TASKS</h1>
            <ul className="theList">
            <FlipMove duration={250} easing="ease-out">
               {listItems}
            </FlipMove>
            </ul>
            
            </div>
            
        )
    }


}

export default TodoItems