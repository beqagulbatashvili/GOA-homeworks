export default function UserList({ data, onAdd }) {
    return (
        <div>
        <h2>All Users</h2>

        {data.map((user, index) => (
            <div key={index}>
            <p>{user}</p>
            <button onClick={() => onAdd(user)}>Add</button>
            </div>
        ))}
        </div>
    );
}
