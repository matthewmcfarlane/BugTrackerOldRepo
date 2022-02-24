import { useEffect, useState } from "react"

const NewBugForm = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    })

    const getAllUsers = () => {
        fetch('http://localhost:8080/users')
        .then(result => result.json())
        .then(data => setAllUsers(data))
    }

    return(
        <form>
            <label></label>
        </form>
    )
}