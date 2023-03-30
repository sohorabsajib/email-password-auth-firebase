/* 
register == sign up
log in == sign in[ already you hv a accout created]
----
get form value:
set onSubmitHandler
set event perameter
event.target.emeil.value


*/
<div>
    <form onSubmit={handleRegister}>
        <input type="email" name="email" id="" placeholder="your email" ></input>
        <br></br>
        <input type="password" name="password" id="" placeholder="your password" ></input>
        <br></br>
        <button type="submit"> Register</button>
    </form>

</div>


const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)