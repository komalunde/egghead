import React from "react";
class Aml extends React.Component{
  render() {
    return(
    <Buttons>
      <button value="A">A</button>
      <button value="B">B</button>
      <button value="C">C</button>
      </Buttons>
      )
  }
}
 class Buttons extends React.Comonent{
   constructor(){
     super();
     this.state= {selected:'None'}
   }
 selectItem(selected){
   this.setState({selected})
 }
   render() {
     let fn = child => 
     React.cloneElement(child, {
         onClick: this.selectItem.bind(this, child.props.value)
     })
     let items =React.Children.map(this.props.children,fn);
     return(
       <div>
         <h2>you have selected: {this.state.selected}</h2>
         {items}
         </div>
     )
   }
 }
export default Aml;
