import React from 'react';
import ReactDOM from 'react-dom';


const Todo = React.createClass( {
    getInitialState() {
        return {
            taskValue: ''
        };
    },
 
    componentWillMount() {
        this.setState( {
            taskValue: this.props.taskValue
        } );
    },
 
    onEdit( event ) {
        this.setState( {
            taskValue: event.target.value
        } );
    },
     editTask: function( event ) {
        this.props.editTask( event.target.value );
    },
 
    render: function() {
        return (
            <div className="input-group" >
		<input type="text" className="form-control" value={ this.state.taskValue } disabled={ ! this.props.editing || 			    this.props.completed } onChange={ this.editTask } />
                </div>
        );
    }
});
 
export default Todo;
