import { useEffect, useState } from "react";

function FetchData() {
    const [data, setData] = useState(null);

    const fetchData = async (apiLink) => {
        try {
            const response = await fetch(apiLink);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData("https://jsonplaceholder.typicode.com/posts/1");
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            <h2>Fetch Data Component</h2>
        </div>
    );
}

export default FetchData;
