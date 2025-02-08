import { useEffect, useState } from "react";

export function NewHome() {
    const [obj, setObj] = useState([]);
    const [id, setId] = useState("");
    const [val, setVal] = useState("");
    const [mail, setMail] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setObj(json))
    }, [])

    const addData = () => {
        if (val, mail) {
            const max = obj.reduce((max, user) => (user.id > max ? user.id : max), users[0].id);
            setObj([...obj, { id: obj.length + 1, name: val, email: mail }]);
        }
    };

    const deleteData = async () => {
        const ids = parseInt(id); // Convert input to number

        if (isNaN(ids)) {
            alert("Please enter a valid numeric ID.");
            return;
        }

        const userExists = obj.some(user => user.id === ids);
        if (!userExists) {
            alert("User ID not found.");
            return;
        }

        // API DELETE request
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            setObj(obj.filter(user => user.id !== ids)); // Remove from UI
            setId(""); // Clear input
            alert(`User with ID ${ids} deleted.`);
        } else {
            alert("Failed to delete user.");
        }
    };


    return (
        <div class="container">
            <div class="content">
                <h1>HTTP Fetch Data from API</h1>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>
                    {obj.map(obj =>
                        <tr key={obj.id}>
                            <td>{obj.id}</td>
                            <td>{obj.name}</td>
                            <td>{obj.email}</td>
                        </tr>
                    )}
                </table>
            </div>
            <div class="content">
                <div class="subContent">
                    <h1>Add Data</h1>
                    <input
                        type="text"
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                        placeholder="Enter Name"
                    />
                    <input
                        type="email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        placeholder="Enter E-mail"
                    />
                    <button onClick={addData}>Add</button>
                </div>
                <div class="subContent">
                    <h1>Delete Data</h1>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Enter ID"
                    />
                    <button onClick={deleteData}>Delete</button>
                </div>
            </div>
        </div>
    );
}