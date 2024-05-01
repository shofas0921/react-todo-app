import React from 'react';
import { Todo } from './index';

const TodoList = ({todos}) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return <Todo todo={todo} key={index.toString()} />
      })}
    </div>
  )
}

export default TodoList
