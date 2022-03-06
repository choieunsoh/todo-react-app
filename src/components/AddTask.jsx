import { useState } from 'react'

const AddTask = ({ createTask }) => {
  const [task, setTask] = useState('')

  const addTaskHandler = (e) => {
    e.preventDefault()
    createTask(task)
    setTask('')
    return false
  }

  return (
    <form className="form-inline" onSubmit={addTaskHandler}>
      <input
        type="text"
        className="form-control form-control-lg"
        style={{ width: '50%', margin: '0 auto' }}
        autoFocus
        value={task}
        onChange={(e) => setTask(e.currentTarget.value)}
        placeholder="Add task ..."
      />
      <button type="submit" className="btn btn-lg btn-primary mt-3">
        Add Task
      </button>
    </form>
  )
}

export default AddTask
