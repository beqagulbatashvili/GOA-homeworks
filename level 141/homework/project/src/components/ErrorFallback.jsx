import React from 'react'

export default function ErrorFallback({ error, resetErrorBoundary }) {
    return (
    <div className="p-4 bg-red-200 text-red-800">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary} className="mt-2 bg-red-500 text-white px-2 py-1">
            Try again
        </button>
    </div>
    )
}
