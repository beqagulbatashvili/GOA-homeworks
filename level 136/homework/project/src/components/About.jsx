import { useLocation } from "react-router-dom"

function About() {
    const location = useLocation()

    return (
        <div>
            <h2>About გვერდი</h2>
            <p>მიმდინარე ბილიკი არის {location.pathname}</p>
        </div>
    )
}

export default About
