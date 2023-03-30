import React, { useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import { Link } from 'react-router-dom';

const auth = getAuth(app);
const Signup = () => {
    const[passwordError,setPasswordError]= useState('');
    const[sucess, setSucess]=useState(false);
    const handleRegister = (e) => {

        e.preventDefault();
        setSucess(false);
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || !/^(?=.*[a-z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!$#%]).{3,}$/.test(password)
        ){
            setPasswordError('pleases correct your email or password');
            return;
        }
        
        setPasswordError('');

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            setSucess(true);
            form.reset();
            verifyEmail();
            
        })
        .catch(error=>{
            console.error("error",error);
            setPasswordError(error.message);
        })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('please check your email and verify')
            });
    }
        return (
            <div>
                <form onSubmit={handleRegister}>
                    <input type="email" name="email" id="" placeholder="your email" required></input>
                    <br></br>
                    <input type="password" name="password" id="" placeholder="your password" required></input>
                    <br></br>
                    <p>{passwordError}</p>
                    {sucess&& <p>user created sucessfully.</p>}
                    <button type="submit"> Register</button>
                </form>
                <p>Already have an account? Plese <Link to="/login">Log in</Link></p>
            </div>
        );
    };


export default Signup;