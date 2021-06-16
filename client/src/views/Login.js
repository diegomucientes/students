import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory,
  } from "react-router-dom";
import LoginForm from '../components/LoginForm';
import { useUser } from '../contexts/userContext';

const Login = () => {
    const [errors, setErrors] = useState([]);
    const {setUser}=useUser();
    const history=useHistory();
    const loginUser = user => {
        axios.post('/api/login', user)
            .then(res=>{
                console.log('User Logged');
                console.log(res.data);
                axios.get(`/api/user/${res.data._id}`, {withCredentials: true})
                .then(res=>{
                    setUser(res.data);
                    history.push('/Home');
                })
                .catch(err=>{
                    console.error(err);
                    return { success: false, data: err.message };
                })

                    
            })
            .catch(err=>{
                console.log(err.response.data);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                
            }) 
    }




    return (
        <div>
             {errors.map((err, index) => <div className="alert alert-danger" role="alert">{err}</div>)}
             <LoginForm onSubmitProp={loginUser} />
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEoXL44iLJYNgi-8O8iqnQA6I8EQs9NXeTDg&usqp=CAU"alt="teacher5"></img>
             <Link  to={'/register'}><button type="button" className="register">Register</button></Link>
        </div>
    );
}

export default Login;
