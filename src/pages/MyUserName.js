import * as React from "react";

import { useContext } from 'react';
import { MyContext } from '../Context/context';


function MyUserName(props) {
    const { user, updateUser} = useContext(MyContext);

    const handleInput = (event) => {
        updateUser(event.target.value);
    } 

    return (
        <>
            <h1>Cambiar nombre de usuario</h1>
            <input value={user} onInput={handleInput}></input>
        </>
    );
}
export default MyUserName;
