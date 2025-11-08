const isLoggedIn = true;
const showList = true;

const hobbies = ["Football", "Gaming", "Coding", "Travel"];

const App = () => {
    return (
        <div>
        <h2>{isLoggedIn ? "მოგესალმებით!" : "გთხოვთ ანგარიშზე შედით"}</h2>

        {showList && <p>ჩემი ჰობების სია:</p>}

        <ul>
            {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
            ))}
        </ul>
        </div>
    );
};
