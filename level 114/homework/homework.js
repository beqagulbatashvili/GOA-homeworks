const number = 5;
const imgUrl = "https://via.placeholder.com/100";

const element = (
    <div>
        <img src={imgUrl} alt="Example" />

        <p>გამოსახული რიცხვი არის: {number * 2}</p>

        <button onClick={() => alert("დათვლილი შედეგია: " + number * 2)}>
        დააჭირე რომ ნახო შედეგი
        </button>
    </div>
);

