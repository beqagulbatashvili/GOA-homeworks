import React from "react";

function Testimonial() {
    const styles = {
        section: {
            background: "linear-gradient(180deg, #0f0f14, #1a1a22)",
            color: "white",
            padding: "80px 20px",
            display: "flex",
            justifyContent: "center",
        },
            container: {
            maxWidth: "800px",
            textAlign: "left",
        },
            text: {
            fontSize: "28px",
            lineHeight: "1.6",
            fontWeight: "500",
            marginBottom: "40px",
        },
            authorName: {
            margin: 0,
            fontSize: "20px",
            fontWeight: "600",
        },
            authorRole: {
            color: "#b0b0c3",
            fontSize: "14px",
        },
    };

    return (
        <section style={styles.section}>
        <div style={styles.container}>
            <p style={styles.text}>
                “I run an ec store selling rare vintage gummy bears and could
                never find a good gummy bear icon. Now I can design my own in
            minutes.”
            </p>

            <div>
                <h3 style={styles.authorName}>Cameron Cons</h3>
                <span style={styles.authorRole}>Entrepreneur</span>
            </div>
        </div>
        </section>
    );
}

export default Testimonial;