import "./InfoCard.css";

const InfoCard = () => {
    return (
        <div className="card">
            <h2 className="title">Frontend Development</h2>

            <p className="description">
                Frontend
            </p>

            <ul className="list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>

            <button className="btn">click</button>
        </div>
    );
};

export default InfoCard;
