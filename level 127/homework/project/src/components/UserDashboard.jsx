import { useEffect, useState } from "react";
import UserItem from "./UserItem";

function UserDashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
        try {
            setLoading(true);
                const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        }

        fetchUsers();
    }, []);

    if (loading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
        <h2>User Dashboard</h2>

        {users.map((user) => (
            <UserItem
            key={user.id}
            user={user}
            onSelect={setSelectedUser}
            />
        ))}

        {selectedUser && (
            <div>
                <h3>User Details</h3>
                <p>Name: {selectedUser.name}</p>
                <p>Email: {selectedUser.email}</p>
                <p>Phone: {selectedUser.phone}</p>
                <p>Company: {selectedUser.company.name}</p>
            </div>
        )}
        </div>
    );
}

export default UserDashboard;
