const myElement = (
    <div className="container">
        <h1 id="Greeting Title">გამარჯობა!</h1>
        <p id="main-text">პარაგრაფი</p>
        <img src="https://i0.wp.com/garonpower.com/wp-content/uploads/2019/01/computer-programming.jpeg?w=1500&ssl=1" />
        <button>click me!</button>
        <input type="text" placeholder="შემიყვანე ტექსტი" />
    </div>
);


// 2)
const person = {
    name: "გიორგი",
    hobby: "ფეხბურთი",
    city: "თბილისი"
};


const myElement1 = (
    <div>
        <p>{person.name}</p>
        <p>{person.hobby}</p>
        <p>{person.city}</p>
    </div>
);

// 3)
let imageUrl = "https://i0.wp.com/garonpower.com/wp-content/uploads/2019/01/computer-programming.jpeg?w=1500&ssl=1";

const myImage = (
    <img
        src={imageUrl}
        alt="sample"
        onClick={(event) => {
        event.preventDefault();

        if (imageUrl === "https://i0.wp.com/garonpower.com/wp-content/uploads/2019/01/computer-programming.jpeg?w=1500&ssl=1") {
            imageUrl = "https://i0.wp.com/garonpower.com/wp-content/uploads/2019/01/computer-programming.jpeg?w=1500&ssl=1";
        } else {
            imageUrl = "https://i0.wp.com/garonpower.com/wp-content/uploads/2019/01/computer-programming.jpeg?w=1500&ssl=1";
        }

        console.log("Image src changed:", imageUrl);
        }}
    />
);