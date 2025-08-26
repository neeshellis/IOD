import { useState } from 'react';

function LoginForm() {
// input state values always need to be strings - empty initially




const [userEmail, setUserEmail] = useState('');
const [userPassword, setUserPassword] = useState('');
const [submitResult, setSubmitResult] = useState('');

const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission

// add some password validation
if (userPassword.length < 5) {
setSubmitResult('Password must be at least 5 characters long');
} else if (userPassword === userEmail) {
setSubmitResult('Password must not match email address');
} else {
setSubmitResult('Successful login.');
}
}


return (

<div className="LoginForm componentBox">

<div className="formRow">

{/* Controlled form element needs both value and onChange.
onChange handler uses event param e to access target
value.
Whenever user types, new value is stored in state. */}

<label>Email Address:

<input type="email" value={userEmail} name="userEmail"
onChange={(e) => setUserEmail(e.target.value)} />
</label>
</div>

<div className="formRow">
<label>Password:
<input type="password" value={userPassword} name="password"
onChange={(e) => setUserPassword(e.target.value)} />
</label>

<form onSubmit={handleSubmit}>

<button>Log In</button>
<p>{submitResult}</p>
</form>
</div>
</div>
)
}
// try removing the onChange prop and typing in a field
export default LoginForm