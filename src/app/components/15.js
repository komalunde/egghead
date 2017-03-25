
import React from 'react';
const HOC = (InnerComponent) => class extends React.Component {
  constructor(){
    super();
    this.state = {count: 0 }
  }
  update() {
    this.setState({ count: this.state.count + 1})
  }
  
  componentWillmount(){
    console.log('will mount')
  }
  render(){
    return (
    <InnerComponent
      {...this.props}
      {...this.state}
      update={this.update.bind(this)}
      />
    )
  }
}
class Aop extends React.Component {  
  render() {
    return( 
      <div>
      <button >Button</button>
        <hr />
      <label>label</label>
      </div>
      )
  }
};

const Button = HOC((props) =>
 <button onClick={props.update}>{props.children}-{props.count} </button>)
                   
class Label extends React.Component{
  componentWillmount(){
    console.log(' label will mount')
  }
render(){
    return 
      (
      <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}
      </label>
      )
  }
};
const LabelHOC=HOC(Label)
export default Aop;
            

