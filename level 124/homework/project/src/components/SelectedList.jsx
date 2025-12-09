export default function SelectedList({ selected, onRemove, onReset }) {
    return (
        <div>
        <h2>Selected Users</h2>

        {selected.length > 0 && (
            <>
            <button onClick={onReset}>Reset</button>
            <hr />
            </>
        )}

        {selected.map((user, index) => (
            <div key={index}>
            <p>{user}</p>
            <button onClick={() => onRemove(index)}>Remove</button>
            </div>
        ))}
        </div>
    );
}
