import { useEffect } from "react";

function WindowClick() {
    useEffect(() => {
        const handleWindowClick = () => {
            console.log("Window was clicked");
        };

        window.addEventListener("click", handleWindowClick);

        return () => {
            window.removeEventListener("click", handleWindowClick);
        };
    }, []);

    return (
        <div>
            <button>Click Me</button>
        </div>
    );
}

export default WindowClick;
