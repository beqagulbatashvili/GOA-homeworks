export const Navbar = () => (
    <nav className="bg-[#2ecc71] text-white p-4 flex justify-between items-center px-10">
        <div className="font-bold text-lg">YOUR LOGO</div>
        <ul className="flex gap-6 text-sm font-medium">
        {['HOME', 'ABOUT', 'TESTIMONIALS', 'PRICING', 'CONTACT', 'SOCIAL'].map((item) => (
            <li key={item} className="cursor-pointer hover:opacity-80">{item}</li>
        ))}
        </ul>
    </nav>
);