import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'
import TaskForm from '../components/TaskForm.jsx'

export default function Home() {
    const { tasks, loading } = useContext(TaskContext)

    if (loading) return <p className="p-4">Loading tasks...</p>

    return (
        <div className="p-4">
        <h1 className="text-2xl mb-4">Task Manager</h1>
            <TaskForm />
            <TaskList tasks={tasks} />
        </div>
    )
}
