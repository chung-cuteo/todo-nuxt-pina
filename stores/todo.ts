import { defineStore } from "pinia"

export const useTodoStore = defineStore("todo", () => {
  interface TodoType {
    id: string
    name: string
  }
  const todoList = ref<TodoType[]>([])

  const addTodo = (todo: TodoType) => {
    todoList.value.unshift(todo)
  }

  const deleteOneTodo = (todoId: string) => {
    todoList.value = todoList.value.filter(({ id }) => id !== todoId)
  }

  const updateTodo = (data: TodoType) => {
    const todo = todoList.value.find(({ id }) => id === data.id)
    if (!todo) throw new Error("not found")
    todo.name = data.name
  }


  return {
    todoList,
    addTodo,
    updateTodo,
    deleteOneTodo
  }

})
