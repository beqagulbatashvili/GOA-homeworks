import { useState } from "react";

const InfoComp = () => {
    const [data, setData] = useState({
        name: "",
        surname: "",
        birth: "",
        email: "",
        password: ""
    });

    const loadInfo = () => {
        const stored = localStorage.getItem("formInformation");
        if (stored) {
        setData(JSON.parse(stored));
        }
    };

    return (
        <div style={{ marginTop: "20px" }}>
        <button onClick={loadInfo}>Click here to load information</button>

        {data.name !== "" && (
            <div>
            <p>{data.name}</p>
            <p>{data.surname}</p>
            <p>{data.birth}</p>
            <p>{data.email}</p>
            <p>{data.password}</p>
            </div>
        )}
        </div>
    );
};

export default InfoComp;
