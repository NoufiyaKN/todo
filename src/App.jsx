// import './App.css'
// import View from './components/View'

// function App() {

//   return (
//     <>
//       <div className='d-flex justify-content-center align-items-center'>
//         <h1 className='d-flex justify-content-center align-items-center'>To Do App</h1>
//       </div>
//       <div style={{height: '70vh'}}><View /></div>
      
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addTodoItem } from '../Slices/todoSlice'

// function View() {

// const [todoText, setTodoText] = useState('')
// const todos =useSelector(selectTodos)

// const dispatch =useDispatch()

// const handleAddTodo = () => {
//     if (todoText.trim() !== '') {
//       dispatch(addTodo({
//         id: Date.now(),
//         text: todoText,
//         completed: false,
//       }));
//       setTodoText('');
//     }
//   };



//   return (
//     <>
//     <div className='d-flex justify-content-center mt-4'>
//         <input onChange={e=>setTodoText(e.target.value)} value={todoText}  type="text" placeholder='Add todo' className='me-3 '/>
//         <button onClick={handleAddTodo} className='btn btn-primary '>Submit</button>
//     </div>
//     </>
//   )
// }

// export default View

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo,deleteTodo,  selectTodos} from './Slices/todoSlice';

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text: todoText,
        completed: false,
      }));
      setTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
        <>
        <div >
          <h1 className='d-flex justify-content-center'>ToDo App</h1>
          <div className='d-flex justify-content-center mt-3'>
            <input
              type="text"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              placeholder="Enter your todo..."
              className='me-3'
            />
            <button className='btn btn-primary d-flex justify-content-center' onClick={handleAddTodo}>Add Todo</button>
          </div>
          <h2 style={{}}>All Todos</h2>
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        </> 
     )
}

export default App;
