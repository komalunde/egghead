class App extends React.Component {
  render() {
    return
    (
      <Parent>
      <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    )
  }
};

class Parent extends React.Component{
  render(){
    //let items =React.Children.only (this.props.children)
   let items = React.Children.toArray(this.props.children)
    console.log(items)
    return null
  }
}


ReactDOM.render(
<App />,
document.getElementById('app'));
