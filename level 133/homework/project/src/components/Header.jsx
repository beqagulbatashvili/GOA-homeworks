import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
    const { theme } = useContext(ThemeContext);

    return (
        <header style={{ padding: "10px" }}>
            <h1>Current Theme: {theme}</h1>
        </header>
    );
}
