import { useContext } from "react"
import { StudentsContext } from "../context/StudentsContext"

function Students() {
    const students = useContext(StudentsContext)

    return (
        <div>
            {students.map(function(name, index) {
                return <p key={index}>{name}</p>
            })}
        </div>
    )
}

export default Students
