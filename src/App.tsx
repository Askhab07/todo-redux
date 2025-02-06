import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import AddTaskPage from './pages/add-task-page/AddTaskPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddTaskPage />} />
    </Routes>
  );
}

export default App;
