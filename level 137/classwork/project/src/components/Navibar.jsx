import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ display: "flex", gap: "20px" }}>
            <Link to="/">Home</Link>
            <Link to="/info">Info</Link>
        </nav>
    );
}

export default Navbar;