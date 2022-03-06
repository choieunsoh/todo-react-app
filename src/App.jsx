import { useState } from 'react'
import uuid from 'react-uuid'
import './App.css'
import TodoApp from './components/TodoApp'
import AddTask from './components/AddTask'
import Task from './components/Task'

function App() {
  const [tasks, setTasks] = useState([])

  const createNewTask = (task) => {
    if (task.trim() === '') {
      alert("Task can't not be empty!")
      return
    }

    const _tasks = [...tasks, { id: uuid(), task }]
    setTasks(_tasks)
  }

  const removeTask = (taskId) => {
    setTasks((prevTasks) => {
      const index = prevTasks.findIndex((t) => t.id === taskId)
      prevTasks.splice(index, 1)
      return prevTasks
    })
  }

  return (
    <div className="container">
      <TodoApp title="Todo App" />
      <AddTask createTask={createNewTask} />

      {tasks &&
        tasks.map(({ id, task }) => {
          return (
            <Task
              key={id}
              id={id}
              task={task}
              delayInSeconds={5}
              onExpired={removeTask}
            />
          )
        })}
    </div>
  )
}

export default App
