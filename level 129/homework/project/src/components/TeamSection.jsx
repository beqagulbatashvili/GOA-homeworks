export const TeamSection = () => {
    const cards = [
        { color: "bg-[#f2e2e2]", text: "text-[#a67c7c]" },
        { color: "bg-[#e2f2e2]", text: "text-[#7ca67c]" },
        { color: "bg-[#fdf7e2]", text: "text-[#a69b7c]" },
        { color: "bg-[#e2effd]", text: "text-[#7c8ca6]" },
    ];

    return (
        <div className="py-16 bg-white text-center">
        <h2 className="text-gray-500 font-bold tracking-widest mb-10 text-sm">OUR TEAM MEMBERS</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-10">
                {cards.map((card, index) => (
                <div key={index} className={`${card.color} p-8 rounded-sm h-72 flex items-center justify-center`}>
                    <p className={`${card.text} text-[13px] leading-relaxed text-center`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Praesent suscipit sem vel ipsum elemnent vel ipsum elemnent venenatis.
                    </p>
                </div>
                ))}
            </div>
        </div>
    );
};