class Good extends React.Component {
constructor() {		
  super();
  this.state = {a:''}
}
  update () {
    this.setState({
      a: this.a.refs.input.value,
      b: this.refs.b.value
    })
  }
  render() {
    return (
				<div>
        <input
          ref = { component => this.a0= component }
          update={this.update.bind(this)} />
        {this.state.a}
          <hr />
        <input 
          ref = "b"
          type = "text"
          onChange = {this.update.bind(this)} />
        {this.state.b}
        </div>
      )
  }
};

class Input extends React.component{
  render(){
    return (
      	<div>
          <input ref="input" type="text" onChange={this.state.update} />
        </div> 
        )
     }
};    
export default Good;
