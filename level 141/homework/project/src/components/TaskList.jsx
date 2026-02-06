import React from 'react'

export default function TaskList({ tasks }) {
    return (
        <ul className="mt-4">
            {tasks.map(task => (
                <li key={task.id} className="p-2 border-b">
                {task.title}
                </li>
            ))}
        </ul>
    )
}
