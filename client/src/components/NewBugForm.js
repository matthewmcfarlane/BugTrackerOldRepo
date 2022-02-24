import { useEffect, useState } from "react"
import postBug from "../services/BugsService";

const NewBugForm = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [formData, setFormData] = useState({})

    useEffect(() => {
        getAllUsers();
    })

    const getAllUsers = () => {
        fetch('http://localhost:8080/users')
        .then(result => result.json())
        .then(data => setAllUsers(data))
    }

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // postBug(formData);
    }

    return(
        <form onSubmit={onSubmit} method="post">
            <label htmlFor="description">Bug Description:</label>
            <input onChange={onChange} type="text" id="description" required/>

            <label htmlFor="severity">Severity:</label>
            <select onChange={onChange} id="severity" required>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <input type="submit" value="Save" id="save"/>
        </form>
    )
}

export default NewBugForm;