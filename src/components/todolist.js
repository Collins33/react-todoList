import React, { Component } from 'react';
import TodoItems from './todoItems';

class TodoList extends Component{

    constructor(props,context){
        super(props,context)

        //the state object
        this.state={
            items:[]
        }
        
        //adding the class method
        this.addItem=this.addItem.bind(this)
        //bind the delete method
        this.deleteItem=this.deleteItem.bind(this)
    }

    //the method called when you submit form

    addItem(e){
        var itemArray=this.state.items//itemArray stores the current value of our items state object

        if( this._inputElement.value !==""){//if the input has a value
           itemArray.unshift({
               text:this._inputElement.value,//get the value and put it in the state property
               key:Date.now
           });
           this.setState({
               items:itemArray
           });
           //clear the input field
           this._inputElement.value=""
        }
        console.log(itemArray)
        e.preventDefault();

    }

    //method to remove item when clicked

    deleteItem(key){
        //create new array with values filtered out
        var filteredItems=this.state.items.filter(function(item){
            return (item.key !== key)
        })
        
        //set the new state
        this.setState({
            items:filteredItems
        });

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
             
             <TodoItems entries={this.state.items}
                         delete={this.deleteItem}/>
            </div>
        )

    }
}

export default TodoList