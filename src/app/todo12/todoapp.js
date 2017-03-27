import React from 'react';
import ReactDOM from 'react-dom';

/* [TODO APP] */


var TodoApp = React.createClass({
	getInitialState: function() {
		return {items: ['Todo item #1','Todo item #2']};
	},
	updateItems:function (newItem){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
	render:function(){
		return(
		<div>
		<TodoBanner />
		<TodoList items={this.state.items} />

		<TodoListItem />
		<TodoForm  onFormSubmit={this.updateItems} />
		</div>
		);
	}
});
	/* [TODO BANNER} */
var TodoBanner = React.createClass({
		render: function(){
		return (
		<h3>TODO ...react.js</h3>
		);
	}
});

	/*[TODOLIST] */
var TodoList = React.createClass({
	render: function(){
	var createItem = function(itemText){
	return (
	<TodoListItem>{itemText}</TodoListItem>
	);
    };
      return <ul>{this.props.items.map(createItem)}</ul>;

  }

});

	/*[TODO LISTITEM] */
var TodoListItem = React.createClass({
	render: function() {
	return (
		<li>{this.props.children}</li>
		
		);
	     }
     });


	/*[TODO FORM]*/
var TodoForm = React.createClass({
	getInitialState: function(){
	return {item: ''};
	},
	handleSubmit: function(e){
	e.preventDefault();

	this.props.onFormSubmit(this.state.item);
	this.setState({item: ''});

	ReactDOM.findDOMNode(this.refs.item).focus();
	return;
      },
        onChange: function(e){
	this.setState({
		item:e.target.value
   });
 },
    render: function(){
       return
	(
	<div>
	<form onSubmit = {this.handleSubmit} >
	<input type='text' ref='item' onChange={this.onChange}
	value={this.state.item} />
	<input type='submit' value='Add'/>
	</form>
      </div>
	);
    }
});


export default TodoApp; 








