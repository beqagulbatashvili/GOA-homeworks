import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeButton from "./ThemeButton";

export default function Content() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
        style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: theme === "light" ? "#ffffff" : "#333333",
            color: theme === "light" ? "#000000" : "#ffffff",
        }}
        >
            <p>This content changes with the theme</p>
            <ThemeButton />
        </div>
    );
}
