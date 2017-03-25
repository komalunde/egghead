import React from "react";
class Bad extends React.Component {
constructor(){
  super();
  this.state = {currentEvent:'___'}
  this.update = this.update.bind(this)
}
  update(e){
    this.setState({currentEvent:e.type})
  }
  render() {
    return (
      <div>
      <textarea
        onKeyPress={this.update}
        onCopy={this.update}
        onCut={this.update}
        onPaste={this.update}
        onFocus={this.update}
        onBlur={this.update}
        onDoubleClick={this.update}
        onTouchStart={this.update}
        onTouchMove={this.update}
        onTouchEnd={this.update}
        col="30"
        row="20" />
      <h1>{this.state.currentEvent}</h1>
        </div>
    )
}

};

export default Bad;
