class Icon extends React.Component {  
  render() {
    return <Title text="1" /> 
  }
};
const Title = (props) => <h1>Title:{props.text}</h1>
class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}

Title.propTypes = {
  text(props,propName,component){
    if(!(propName in props)){
      return new Error('missing $ {propName}')
    }
    if(props[propName].length <6 ){
            return new Error('${propName} was too short')
                             }
  }
}
export default Icon;
            

