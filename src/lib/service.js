import axios from 'axios'

export const saveTodo = (todo) =>
  axios.post('http://example.com/api/todos', todo)

export const loadTodos = () => 
  axios.get('http://example.com/api/todos')  


export const destroyTodo = (id) =>
  axios.delete(`http://example.com/api/todos/${id}`)

export const updateTodo = (todo) =>
  axios.put(`http://example.com/api/todos/${todo.id}`, todo)
