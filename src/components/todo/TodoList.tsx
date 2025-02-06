import './todoList.scss';
import Todo from './Todo';
import { useAppSelector } from '../../hooks/useAppSelector';

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  return (
    <div className="todo-list">
      <div
        className={`${
          todos.filter((todo) => !todo.completed).length > 0
            ? 'todo-list__all'
            : 'active'
        }`}
      >
        {todos.filter((todo) => !todo.completed).length > 0 ? (
          todos
            .filter((todo) => !todo.completed)
            .map((todo) => <Todo key={todo.id} todo={todo} />)
        ) : (
          <h2 className="todo-list__empty">Нету заметок</h2>
        )}
      </div>

      <div className="todo-list__completed">
        <h3 className="todo-list__completed-title">Completed</h3>
        <div className="todo-list__completed-items">
          {todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
