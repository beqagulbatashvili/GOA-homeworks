const users = [
    { username: "giorgi", userAge: 15 },
    { username: "mari", userAge: 16 },
    { username: "dato", userAge: 17 },
];

    function Users() {
    return (
        <ul>
        {users.map((user, index) => (
            <li key={index}>
            <p>{user.username}</p>
            <i>{user.userAge}</i>
            </li>
        ))}
        </ul>
    );
}

export default Users;
