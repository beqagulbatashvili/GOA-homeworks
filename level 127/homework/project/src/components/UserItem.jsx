function UserItem({ user, onSelect }) {
    return (
        <div onClick={() => onSelect(user)}>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
}

export default UserItem;
