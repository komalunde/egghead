import React from "react";
import ReactDOM from "react-dom";
import Pop from "./components/seven";
import Aop from "./components/15";
import Bad from "./components/bad";
class App extends React.Component{
  render() {
    return (
      <div>
	<Aop />
	<h1> Hello world</h1>
        <b>bold</b>
	<Bad />
	<hr />
	<Pop />
	<hr />
	</div>
      )
  }
};

ReactDOM.render(
<App />,
document.getElementById('app'));


