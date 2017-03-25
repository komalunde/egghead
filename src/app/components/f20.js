import React from "react";
class Ppp extends React.Component {
constructor() {
  super();
  this.state ={ 
  red:0,
  /*green:0,
  blue:0*/
}
  this.update=this.update.bind(this)
}
update(e){
  this.setState({
    red:ReactDOM.findDOMNode(this.refs.red.refs.inp).value,s
    /*green:ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
    blue:ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
*/  })
}
render() {
    return (
      <div>
        <NumInput 
          ref="red"
          min={0}
          max={255}
          step={1}
          val={+this.state.red}
          type="number"
          label="Red"
          update={this.update} />
        
          /*<NumInput 
          ref="green"
          min={0}
          max={255}
          step={1}
          val={+this.state.red}
          type="number"
          label="green"
          update={this.update} />
        
        <NumInput 
          ref="blue"
          min={0}
          max={255}
          step={1}
          val={+this.state.red}
          type="number"
          label="blue"
          update={this.update} />
      */
      </div>
    )
}
};
class NumInput extends React.Component{
  render(){
    let label = this.props.label !== '' ?
        <label>{this.prps.label} -{this.props.val} </label>: ''
    return(
      <div>
        <input ref="inp" 
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update}  />
        {label}
        </div>
    )
  }
};
NumInput.propTypes={
  min:React.PropTypes.number,
  max:React.PropTypes.number,
  step:React.PropTypes.number,
  val:React.PropTypes.number,
  label:React.PropTypes.string,
  update:React.PropTypes.func.isRequired,
  type:React.PropTypes.oneOf(['number','range'])
}

NumInput.defaultProps = {
  min:0,
  max:0,
  step:1,
  val:0,
  label: '',
  type:'range'
}
export default Ppp;

  
