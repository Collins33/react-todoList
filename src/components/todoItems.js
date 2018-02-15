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
            <ul className="theList">
             {listItems}
            </ul>
        )
    }


}

export default TodoItems