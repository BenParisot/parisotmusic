import * as React from "react";
import UserInterface from '../interfaces/User/UserInterface';

const User: React.FC<UserInterface> = (props: UserInterface) => {
    return (
        <div>
            <h1>My name is {props.name}!</h1>
        </div>
    )
}
export default User;