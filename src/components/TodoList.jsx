import React from 'react';
import { Todo } from './index';

const TodoList = ({todos, toggleTodo}) => {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>
      })}
    </div>
  )
}

export default TodoList
