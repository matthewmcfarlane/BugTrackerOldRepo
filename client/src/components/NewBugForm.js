import { useEffect, useState } from "react"
import { postBug } from "../services/BugsService";

const NewBugForm = ({ onBugAddition }) => {
    const [allUsers, setAllUsers] = useState([]);
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [reporter, setReporter] = useState("");

    useEffect(() => {
        getAllUsers();
    }, [])

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
        if(event.target.id === "description"){
            setDescription(event.target.value);
        }
        else if(event.target.id === "priority"){
            setPriority(event.target.value);
        }
        else if(event.target.id === "reporter"){
            setReporter(event.target.value);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(priority && reporter){
            postBug({
                'description': description,
                'priority': priority
            }, allUsers[reporter]);
            onBugAddition();
            setDescription("");
            setPriority("");
            setReporter("");
        }
    }

    return(
        <form onSubmit={onSubmit} method="post">
            <label htmlFor="description">Bug Description:</label>
            <input
            onChange={onChange}
            type="text"
            id="description"
            value={description}
            required
            />

            <label htmlFor="priorty">Severity:</label>
            <select
            onChange={onChange}
            id="priority"
            value={priority}
            required
            >
                <option value="">Select an option...</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <label htmlFor="reporter">Reported By:</label>
            <select
            onChange={onChange}
            id="reporter"
            value={reporter}
            required
            >
            <option value="">Select a user...</option>
                {userOptions}
            </select>

            <input type="submit" value="Save" id="save"/>
        </form>
    )
}

export default NewBugForm;