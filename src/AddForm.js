import React from 'react';

class AddForm extends React.Component{

	state = {

		content: ''
	}

	handleChange = (e) =>{

		this.setState({
			content: e.target.value	
		});
	}
	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({

			content: ''
		});
	}
	render(){
		return(
				<form onSubmit= {this.handleSubmit}>
				<label> Add todo </label>
				<input type="text" onChange={this.handleChange} value={this.state.content}/>
				</form>
			);

	}
		
}

export default AddForm;