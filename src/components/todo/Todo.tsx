import './todo.scss';
import {
  IoCalendarOutline,
  IoDocumentTextOutline,
  IoTrophyOutline,
} from 'react-icons/io5';
import { ITodo } from '../../types/ITodo';
import { completedTodo } from '../../store/reducer/todoSlice';
import { useCallback, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

interface ITodoProps {
  todo: ITodo;
}

const Todo: React.FC<ITodoProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);

  const handleToggle = useCallback(() => {
    dispatch(completedTodo(todo.id));
  }, [dispatch, todo.id]);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      className={`todo-item ${active ? 'todo-item--active' : ''}`}
      onClick={handleClick}
    >
      <div className="todo-item__wrapper">
        <div
          className={`todo-item__icon ${todo.completed ? 'icon-active' : ''}`}
        >
          {todo.category === 'work' ? (
            <IoDocumentTextOutline
              className={`todo-item__icon-img ${
                todo.completed ? 'img-active' : ''
              }`}
            />
          ) : todo.category === 'event' ? (
            <IoCalendarOutline
              className={`todo-item__icon-img ${
                todo.completed ? 'img-active' : ''
              }`}
            />
          ) : todo.category === 'goal' ? (
            <IoTrophyOutline
              className={`todo-item__icon-img ${
                todo.completed ? 'img-active' : ''
              }`}
            />
          ) : null}
        </div>

        <h2
          className={`todo-item__title ${
            todo.completed ? 'todo-item__title--checked' : ''
          }`}
        >
          {todo.title}
          <span className="todo-item__date">{todo.time}</span>
        </h2>

        <div className="todo-item__checkbox" onClick={handleToggle}>
          <div className="todo-item__checkbox-wrapper" />
          {todo.completed ? (
            <MdCheckBox className="todo-item__checkbox-img" />
          ) : (
            <MdCheckBoxOutlineBlank className="todo-item__checkbox-img" />
          )}
        </div>
      </div>

      {active && (
        <div className="todo-item__details">
          <h2 className="todo-item__details-date">{todo.date}</h2>
          <h2 className="todo-item__details-notes">{todo.notes}</h2>
        </div>
      )}
    </div>
  );
};

export default Todo;
