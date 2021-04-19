import React from 'react'

const TodoItem = props =>
  <li className={props.isComplete ? "completed" : null}>
    <div className="view">
      <input id={`${props.id}-input`} className="toggle" type="checkbox"
        checked={props.isComplete}
        onChange={() => props.handleToggle(props.id)}/>
      <label htmlFor={`${props.id}-input`}>
        {props.name}
      </label>
      <button aria-label={`Destroy ${props.name}`} className="destroy"
        onClick={() => props.handleDelete(props.id)}></button>
    </div>
  </li>

export default props =>
  <ul className="todo-list" aria-label="Todo List">
    {props.todos.map(todo =>
      <TodoItem key={todo.id} {...todo}     handleDelete={props.handleDelete}
      handleToggle={props.handleToggle} />)}
  </ul>
