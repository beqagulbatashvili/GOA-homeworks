import React, { useState } from "react";

export default function Profile() {
    const [firstName, setFirstName] = useState("beqa");
    const [lastName, setLastName] = useState("gulbatashvili");
    const [academy, setAcademy] = useState("goa");

    return (
        <div>
        <p>სახელი: {firstName}</p>
        <p>გვარი: {lastName}</p>
        <p>აკადემია: {academy}</p>
        </div>
    );
}
