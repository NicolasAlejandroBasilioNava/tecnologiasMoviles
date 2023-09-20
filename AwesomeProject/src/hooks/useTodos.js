import { useState } from "react"
import { createErrorButtonAlert } from "../helpers/showError"


export const useTodos = () =>{
  const [todos, setTodos]= useState([])
  const [inputValue, setInputValue] = useState()
  const [editing, setEditing] = useState()

  const isValidTaskName = () => {

  }

  const handleDeleteTask= (todoId) =>{
    const filteredArray = todos.filter(
      todo => todo.id !== todoId
    )
    setTodos(filteredArray)
  }

  const handleCompletedTask = (todoId) =>{
    const todosUpdate = todos.map((todo) =>{
      if (todo.id === todoId){
        return{
          ...todo,
          isCompleted: !todo.isCompleted,
          updated: new Date() + '',
        };
      }
      return todo;
    })

    setTodos(todosUpdate)
  }

  const handleEditTodo = (todoId) => {
    const todo = todos.find( (todo) => todo.id === todoId )
    if(editing === todoId || todo.isCompleted){
      setEditing(null)
      setInputValue('')
      if(todo.isCompleted) return createErrorButtonAlert({
                              errorType: 'Error',
                              errorText: 'This task has already been marked as completed.',
                            });
    }else{
      setEditing(todoId)
      setInputValue(todo.name)
    }
  }

  const handleEditPendingTodo = () => {
    if( inputValue === ''){
      return createErrorButtonAlert({
        errorType: 'Error',
        errorText: 'No puedes crear un pendiente sin nombre',
      });
      
    }
    const existingTaskName = todos.some(
      todo => todo.name.toLowerCase() === inputValue.toLowerCase() && todo.id !== editing
    )
    if(existingTaskName) return createErrorButtonAlert({
                          errorType: 'Error',
                          errorText: 'This task has already been marked as completed.',
                        });

    const todosUpdate = todos.map((todo) =>{
      if (todo.id === editing){
        return{
          ...todo,
          name: inputValue,
          updated: new Date() + '',
        };
      }
      return todo;
    })

    setTodos(todosUpdate)
    setEditing(null)
    setInputValue('')
  }

  const handleAddTodo = () => {
    if( inputValue === ''){
      return createErrorButtonAlert({
        errorType: 'Error',
        errorText: "You can't create a task without a name.",
      });
    }
    const existingTaskName = todos.some(
      todo => todo.name.toLowerCase() === inputValue.toLowerCase()
    )
    if(existingTaskName) return createErrorButtonAlert({
                          errorType: 'Error',
                          errorText: 'Task name already assigned, please try another one',
                        });
    setTodos([
      ...todos,
      {
      id: new Date().toISOString(),
      name: inputValue,
      isCompleted: false,
      created: new Date() + '',   
      updated: null,
    }])
    setInputValue('')
  }

  return({
    inputValue,
    todos,
    handleAddTodo,
    handleCompletedTask,
    handleDeleteTask,
    handleEditPendingTodo,
    handleEditTodo,
    editing,
    setInputValue,
})


}

