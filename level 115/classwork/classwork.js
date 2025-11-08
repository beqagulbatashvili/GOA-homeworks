const list = document.getElementById("myList");

if (Math.random() > 0.5) {
    const li1 = document.createElement("li");
    li1.textContent = "ნებისმიერი ტექსტი"; 
    list.appendChild(li1);
}

const li2 = document.createElement("li");
li2.textContent = Math.random() > 0.5 ? "hello" : "goodbye";
list.appendChild(li2);

// 2)
const interests = ["Football", "Music", "Programming", "Movies"];

function App() {
    return (
        <ul>
        {interests.map((interest) => {
            return <li key={interest}>{interest}</li>;
        })}
        </ul>
    );
}

