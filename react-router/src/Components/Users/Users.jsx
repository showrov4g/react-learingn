import { useLoaderData } from "react-router-dom";
import User from "../../User/User";
import "./Users.css"


const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Our Users:{users.length}</h2>
            <h3>This is our users pages</h3>
            <p>Here you can see our all user </p>
            <div className="grid grid-cols-3">
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;