function Navbar() {
    return (
        <nav className="flex items-center justify-between px-10 py-6">
            <div className="font-bold text-xl">Brand</div>

            <ul className="hidden md:flex gap-8 text-gray-600">
                <li className="text-pink-500">About</li>
                <li>How it works</li>
                <li>Features</li>
                <li>Blog</li>
            </ul>

            <div className="flex gap-4">
                <button className="px-4 py-2 border rounded-lg">
                    Sign up
                </button>
                <button className="px-4 py-2 bg-black text-white rounded-lg">
                    Log in
                </button>
            </div>
        </nav>
    )
}

export default Navbar
