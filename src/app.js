import { Route, Routes } from 'react-router-dom'

import Navbar from './components/navBar';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' 
        element={<TodoList />} />
        <Route path='/todoForm/new' 
        element={<TodoForm />} />
        <Route path='/todoForm/:id' 
        element={<TodoForm />} />
      </Routes>
    </>
  );
}

export default App;
