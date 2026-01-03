function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center px-10 py-20">
        <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-tight">
                Boost Your <br /> Startup Business <br /> Faster
            </h1>

            <p className="text-gray-500 mt-6">
                Build modern landing pages using React and Tailwind CSS
            </p>

            <button className="mt-8 px-8 py-4 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600">
                Get Started
            </button>
        </div>

        <div className="mt-12 md:mt-0 md:ml-20">
            <span className="text-gray-500">Illustration</span>
            </div>
        </section>
    )
}

export default Hero
