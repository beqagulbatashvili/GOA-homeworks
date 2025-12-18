import { useEffect } from "react";

function MouseDown() {
    useEffect(() => {
        const handleMouseDown = () => {
            console.log(Date.now());
        };

        document.addEventListener("mousedown", handleMouseDown);

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    });

    return (
        <div>
            <h2>click</h2>
        </div>
    );
}

export default MouseDown;
