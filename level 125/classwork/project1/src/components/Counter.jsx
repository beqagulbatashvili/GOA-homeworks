import { useEffect, useState } from "react";

const ExampleComponent = () => {
    const [info, setInfo] = useState("");

    const getData = async () => {
        return "Hello from async function!";
    };

    useEffect(() => {
        const load = async () => {
        const result = await getData();
        setInfo(result);
        console.log(result);
        };

        load();
    }, []);

    return (
        <div>
        <p>{info}</p>
        </div>
    );
};

export default ExampleComponent;
