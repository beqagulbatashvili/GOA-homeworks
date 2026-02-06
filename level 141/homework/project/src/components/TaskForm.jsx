import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'

export default function TaskForm() {
    const [title, setTitle] = useState('')
    const { tasks, setTasks } = useContext(TaskContext)

    function handleSubmit(e) {
    e.preventDefault()
    if (!title) return
    const newTask = { id: Date.now(), title }
    setTasks([...tasks, newTask])
    setTitle('')
}

return (
        <form onSubmit={handleSubmit} className="flex gap-2">
        <input 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="border p-1 flex-1" 
            placeholder="New task" 
        />
            <button className="bg-green-500 text-white px-3 py-1">Add</button>
        </form>
    )
}
