import {
  IoCalendarOutline,
  IoDocumentTextOutline,
  IoTrophyOutline,
} from 'react-icons/io5';
import Header from '../../components/header/Header';
import './addTaskPage.scss';
import Button from '../../components/button/Button';
import { useState } from 'react';
;
import { addTodo } from '../../store/reducer/todoSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const AddTaskPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddTodo = () => {
    const newTodo = {id: Date.now(), title, category, date, time, notes, completed: false};
    dispatch(addTodo(newTodo));
    navigate('/');
  }

  return (
    <div className="add-task">
      <Header className="add-task__header" />
      <div className="add-task__title">
        Task Tiile
        <input
          className="add-task__title-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="add-task__category">
        Category
        <button
          className={`add-task__category-button button ${
            category === 'work' ? 'selected' : ''
          }`}
          onClick={() => setCategory('work')}
        >
          <IoDocumentTextOutline className="add-task__category-icon" />
        </button>
        <button
          className={`add-task__category-button button ${
            category === 'event' ? 'selected' : ''
          }`}
          onClick={() => setCategory('event')}
        >
          <IoCalendarOutline className="add-task__category-icon" />
        </button>
        <button
          className={`add-task__category-button button ${
            category === 'goal' ? 'selected' : ''
          }`}
          onClick={() => setCategory('goal')}
        >
          <IoTrophyOutline className="add-task__category-icon" />
        </button>
      </div>
      <div className="add-task__date">
        When
        <div className="add-task__date-time">
          <input
            className="add-task__date-input"
            type="date"
            name=""
            id=""
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className="add-task__time-input"
            type="time"
            name=""
            id=""
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      <div className="add-task__notes">
        Notes
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="add-task__notes-input"
          name=""
          id=""
          placeholder="Add your notes here"
        />
      </div>
      <Button onClick={handleAddTodo}>Save</Button>
    </div>
  );
};

export default AddTaskPage;
