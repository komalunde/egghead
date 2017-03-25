class Lol extends React.Component {
constructor(){
  super();
  this.state = {val:0}
  this.update = this.update.bind(this)
}
  update(e){
    this.setState({val:this.state.val+1})
  }
  componentWillMount(){
    console.log('componentWillMount')
    this.setState({m:2})
  }
  
  render() {
    console.log('render');
    return <button onClick={this.update}>
      {this.state.val * this.state.m}
    </button>
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.inc = setInterval(this.update,1000)
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.inc)
  }
}


class Wrapper extends React.Component{
  mount(){
    ReactDOM.render(<Lol />,document.getElementById('a'))
  }
   unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
 
  render(){
    return(
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onclick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
        </div>
    )
  }
};

 export default Wrapper
