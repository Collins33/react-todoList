import React, { Component } from 'react';

class TodoItems extends Component{
    constructor(props,context){
        super(props,context);


    this.createTask=this.createTask.bind(this)
    }

    createTask(item){
    return <li key={item.key}>{item.text}</li>
    }


    render(){
        var todoListEntries=this.props.entries;
        var listItems=todoListEntries.map(this.createTask)
        return(
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 well">
            <h1 class="text-center">MY TASKS</h1>
            <ul className="theList">
             {listItems}
            </ul>
            
            </div>
            
        )
    }


}

export default TodoItems