import { useEffect, useState } from "react"
import postBug from "../services/BugsService";

const NewBugForm = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [formData, setFormData] = useState({});
    const [selectedReporter, setSelectedReporter] = useState({});

    useEffect(() => {
        //return getAllUsers();
    })

    const getAllUsers = () => {
        fetch('http://localhost:9090/users')
        .then(result => result.json())
        .then(data => setAllUsers(data))
    }

    const userOptions = allUsers.map((user, index) => {
        return(
            <option value={index} key={index}>{user.name}</option>
        )
    })

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
        if(event.target.id == 'reporter'){
            setSelectedReporter(allUsers[event.target.value]);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postBug(formData, selectedReporter);
    }

    return(
        <form onSubmit={onSubmit} method="post">
            <label htmlFor="description">Bug Description:</label>
            <input onChange={onChange} type="text" id="description" required/>

            <label htmlFor="priorty">Severity:</label>
            <select onChange={onChange} id="priority" required>
                <option value=""></option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <label htmlFor="reporter">Reported By:</label>
            <select onChange={onChange} id="reporter" required>
                <option value="" key=""></option>
                {userOptions}
            </select>

            <input type="submit" value="Save" id="save"/>
        </form>
    )
}

export default NewBugForm;