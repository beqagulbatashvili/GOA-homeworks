import { useParams, useNavigate } from "react-router-dom"

function Profile() {
    const params = useParams()
    const navigate = useNavigate()

    return (
        <div>
            <h2>Profile გვერდი</h2>
            <p>User id არის {params.id}</p>

            <button onClick={() => navigate("/")}>
                Homeზე დაბრუნება
            </button>
        </div>
    )
    }

export default Profile
