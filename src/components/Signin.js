import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);


const Signin = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const handleRegister = event => {
        event.preventDefault();
        setSuccess(false);


        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();

            })
            .catch(error => {
                console.log('error', error);
            })
    }
    const handleEmailBlur = event =>{
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }
    const handleForgetPassword = () => {
        if(!userEmail){
            alert('Please enter your email');
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email sent!');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <h3>pleases log in</h3>
            <div>
                <form onSubmit={handleRegister}>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder="your email" required></input>
                    <br></br>
                    <input type="password" name="password" id="" placeholder="your password" required></input>
                    <br></br>

                    <button type="submit"> Log in</button>
                </form>
                {success && <p>sucessfully log in</p>}
                <p>new to this site? Please <Link to='/register'>Register</Link></p>
                <p>Forget password? <button onClick={handleForgetPassword}>Reset Password</button></p>
            </div>
        </div>
    );
};

export default Signin;