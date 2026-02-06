import React, { createContext, useState, useEffect } from 'react'
import { fetchTasks } from '../api.js'

export const TaskContext = createContext()

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

useEffect(() => {
    async function loadTasks() {
        try {
            const data = await fetchTasks()
            setTasks(data)
            } catch (error) {
                console.error('Failed to load tasks', error)
            } finally {
                setLoading(false)
        }
    }
    loadTasks()
}, [])

return (
        <TaskContext.Provider value={{ tasks, setTasks, loading }}>
        {children}
        </TaskContext.Provider>
    )
}
