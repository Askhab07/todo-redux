import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import TodoList from '../../components/todo/TodoList';
import { useLocation, useNavigate } from 'react-router-dom';
import './homePage.scss';

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    return location.pathname === '/' && navigate('/add');
  };

  return (
    <div className="homepage">
      <Header className="homepage__header" />
      <div className="homepage__content">
        <TodoList />
      </div>
      <Button onClick={handleClick}>Add New Task</Button>
    </div>
  );
};

export default HomePage;
