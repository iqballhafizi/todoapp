import React from 'react';

const Todo = ({todo, deleteTodo}) => {

	const todoList = todo.length ? (
		todo.map(task => {
			return(
				<div className="collection-item" key={task.id}>
					<span onClick = {() => {deleteTodo(task.id)}}> {task.content}</span>
				</div>
				);
		})
		) : (
		<p className="center"> You have no todos left </p>
		);
	return(
		<div className="collection">
			{todoList}
		</div>
		);

}

export default Todo;