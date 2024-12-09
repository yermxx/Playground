import { useReducer, useState } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-todo': {
      const text = action.payload.text;
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      return {
        count: state.count + 1,
        todos: [...state.todos, newTodo],
      };
    }
    case 'delete-todo':
      return {
        count: state.count - 1,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case 'mark-todo':
      return {
        count: state.count,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  todos: [],
};

export default function App() {
  const [inputText, setInputText] = useState('');
  const [toDoList, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Todo-List</h1>
      <p>오늘의 할 일: {toDoList.count} 개</p>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={() => dispatch({ type: 'add-todo', payload: { text: inputText } })}>추가</button>
      <ul>
        {toDoList.todos.map((todo) => {
          return (
            <li key={todo.id}>
              <ToDoItem id={todo.id} text={todo.text} completed={todo.completed} dispatch={dispatch} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
