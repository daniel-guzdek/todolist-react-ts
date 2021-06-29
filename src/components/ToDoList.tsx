import React from 'react';

interface ToDoListProps {
  items: {id: string, text: string}[];
  onDeleteTodo: (id: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
  return(
    <ul>
      {props.items.map(todo => {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
          </li>
        ) 
      })}
    </ul>
  )
};

export default ToDoList;