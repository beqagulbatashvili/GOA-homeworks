function Card({ children }) {
    return (
        <div style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "8px",
        margin: "10px 0"
        }}>
        {children}
        </div>
    );
}

export default Card;
