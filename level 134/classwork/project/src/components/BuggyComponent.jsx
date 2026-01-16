export default function BuggyComponent({ count }) {
    if (count === 3) {
        throw new Error("Something went wrong!");
    }

    return (
        <div>
            <h2>Buggy Component</h2>
            <p>Count: {count}</p>
        </div>
    );
}