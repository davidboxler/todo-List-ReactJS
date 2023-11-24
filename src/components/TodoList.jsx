import PropTypes from "prop-types";
import { TodoItem } from './TodoItem';

export const TodoList = ({
	todos,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<ul>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			))}
		</ul>
	);
};

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	handleUpdateTodo: PropTypes.func.isRequired,
	handleDeleteTodo: PropTypes.func.isRequired,
	handleCompleteTodo: PropTypes.func.isRequired,
};

