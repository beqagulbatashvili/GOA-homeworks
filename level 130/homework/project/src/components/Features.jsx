function Features() {
    return (
        <section className="px-10 py-16 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 rounded-xl bg-gray-50">
            <h3 className="font-semibold text-lg">Fast</h3>
            <p className="text-gray-500 mt-2">
                Optimized for speed
            </p>
        </div>

        <div className="p-6 rounded-xl bg-gray-50">
            <h3 className="font-semibold text-lg">Modern</h3>
            <p className="text-gray-500 mt-2">
                Clean modern UI
            </p>
        </div>

        <div className="p-6 rounded-xl bg-gray-50">
            <h3 className="font-semibold text-lg">Responsive</h3>
            <p className="text-gray-500 mt-2">
                Works on all devices
            </p>
        </div>
        </section>
    )
}

export default Features
