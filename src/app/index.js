import React from "react";
import ReactDOM from "react-dom";
import Icon from "./components/icon";

class App extends React.Component{
  render() {
    return (
      <div>
        <h1> Hello world</h1>
        <b>bold</b>
	<Icon />
       </div>
      );
  }
}

ReactDOM.render(
<App />,
document.getElementById('app'));


