import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

export default function Form() {
    const {register, handleSubmit, errors} = useForm();
    const [data, setData] = useState("");
    console.log(register)

   const onSubmit = data => {
        console.log(data)
        console.log(errors && errors.mess)
        setData(data.firstName)
    };
    return (
       <form onSubmit={handleSubmit(onSubmit)}> 
            <input type="email" {...register("firstName", {required:true})}></input>
            <input type="password" {...register("pass", {minLength:8})} ></input>
          
            <input type="submit" placeholder="forro"></input>
        {data ? <p>Welcome {data} </p> : null}
    </form>
    )
}
