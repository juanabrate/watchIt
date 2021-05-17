import React, {useState} from 'react';

export default function Form() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    // function handleUser(e) {
    //     setUser(e.target.value);
    //     console.log(user);
    // }
    // function handlePass(e) {
    //     setPass(e.target.value);
    //     console.log(pass);;
    // }
    function submitForm() {
        let message = `Welcome ${user}! Your password is ${pass}`;
        return message
    }
    return (
       <> 
            <input type="text" placeholder="user" onChange={e => setUser(e.target.value)} required></input>
            <input type="password" placeholder="pass" onChange={e => setPass(e.target.value)} required></input>
            <button type="button" onClick={submitForm}>Submit</button>

            <h4>{}</h4>
    </>
    )
}