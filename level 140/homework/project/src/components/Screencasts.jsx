import React from "react"

export default function Screencasts() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-gray-900 text-white py-6 text-center">
                <h1 className="text-3xl font-bold">Screencasts</h1>
                <p className="mt-2">videos</p>
            </header>

            <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white rounded-2xl shadow p-4">
                <h3 className="text-xl font-semibold mb-3">HTML</h3>
                <iframe
                    className="w-full h-48 rounded-xl"
                    src="https://www.youtube.com/embed/dD2EISBDjWM"
                    allowFullScreen
                ></iframe>
                </div>

                <div className="bg-white rounded-2xl shadow p-4">
                <h3 className="text-xl font-semibold mb-3">CSS</h3>
                <iframe
                    className="w-full h-48 rounded-xl"
                    src="https://www.youtube.com/embed/1Rs2ND1ryYc"
                    allowFullScreen
                ></iframe>
                </div>

                <div className="bg-white rounded-2xl shadow p-4">
                <h3 className="text-xl font-semibold mb-3">JavaScript start</h3>
                <iframe
                    className="w-full h-48 rounded-xl"
                    src="https://www.youtube.com/embed/W6NZfCO5SIk"
                    allowFullScreen
                ></iframe>
                </div>
            </div>
        </div>
    )
}
