import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const goToInfo = () => {
        navigate("/info");
    };

    return (
        <div>
            <h1>Home Page</h1>
            <p>ეს არის მთავარი გვერდი</p>

            <button onClick={goToInfo}>
                გადასვლა Info გვერდზე
            </button>
        </div>
    );
}

export default Home;