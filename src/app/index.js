import React from "react";
import ReactDOM from "react-dom";
import TodoBox from "./todo12/todolist";
import TodoAppk from "./todo12/todo";
import TodoAppl from "./todo12/tolist";
import TodoList from "./todo12/list";



class App extends React.Component{
  render() {
    return (
      <div>
	<hr />
	<h1> hello </h1>
	<TodoBox />
	<TodoAppk />
	<hr />
	<TodoAppl />
	<hr />
	<TodoList />
	<hr />
	</div>
     )
  }
};

ReactDOM.render(
<App />,
document.getElementById('app'));


