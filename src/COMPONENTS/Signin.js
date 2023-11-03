import { useState } from "react";
import "../CSS/Signin.css";
import "../CSS/Signout.css";


const Signin = ({ handleSignin }) =>
{

	let [name, setName] = useState();
	let [pass, setPass] = useState();

	return (

		<div className="main-container">
			<div className="inner-container">
				<h2>BlogSite: Publish your Passion.</h2>
				<div className="container">

					<input
						type="text"
						placeholder="Enter UserName"
						onChange={(e) => setName(e.target.value)} />
					<input
						type="password"
						placeholder="Enter password"
						onChange={(e) => setPass(e.target.value)} />
					<button onClick={() => handleSignin(name, pass)} className="btn-signin-out"> Sign in </button>
				</div>
			</div>
			<div className="img-container">
				<img src='/Uploads/Anatomy-of-the-Perfect-Blog-Post.png' alt="Table with a monitor, a table lamp and a pen holder." className="image" />
			</div>

		</div>
	);
}
export default Signin;