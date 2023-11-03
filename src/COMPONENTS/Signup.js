import { useState } from "react";
import "../CSS/Signup.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () =>
{
	let [name, setName] = useState();
	let [pass, setPass] = useState();
	let [cpass, setCpass] = useState();
	const navigate = useNavigate();


	const handleCreateAccount = () => 
	{
		if (pass === cpass && pass !== undefined) {
			localStorage.setItem(name, pass);
			setName(undefined);
			setPass(undefined);
			setCpass(undefined);
			alert("Account created successfully.");
			navigate("/");
		} else {
			alert("password do not match");
		}

	}

	return (
		<div className="main-container-signup">
			<div className="inner-container">
				<h1>EXPLORE NEW PERSPECTIVES</h1>
				<h3>
					Read and share ideas from independent voices, world class publications, and experts from around the globe. Everyone's welcome.
				</h3>
			</div>
			<div className="signup-container">
				<h1>Sign Up</h1>
				<input
					type="text"
					placeholder="Enter UserName"
					onChange={(e) => setName(e.target.value)} />
				<input
					type="password"
					placeholder="Enter password"
					onChange={(e) => setPass(e.target.value)} />
				<input
					type="password"
					placeholder="Confirm Password"
					onChange={(e) => setCpass(e.target.value)} />
				<div className="btn-div">
					<button className="btn-sign-up" onClick={handleCreateAccount}> Sign up </button>
					<Link to="/" ><button className="btn-sign-up btn-sign-in"> Sign in </button></Link>
				</div>

			</div>

		</div>
	);
}
export default Signup;