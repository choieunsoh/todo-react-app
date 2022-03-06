import { useEffect, useState } from 'react'

const Task = ({ id, task, delayInSeconds, onExpired }) => {
  const [timer, setTimer] = useState(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const _timer = setTimeout(() => {
      if (timer !== null) {
        clearTimeout(timer)
      }
      setVisible(false)
      setTimer(null)
      onExpired(id)
    }, delayInSeconds * 1000)

    setTimer(_timer)
  }, [delayInSeconds])

  return visible ? <div className="task">{task}</div> : <></>
}

export default Task
