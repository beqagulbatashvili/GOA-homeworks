import { useNavigate } from "react-router-dom"

function Profile() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Profile Page</h1>
            <button onClick={() => navigate(-1)}>
                Back to Home
            </button>
        </div>
    )
}

export default Profile
