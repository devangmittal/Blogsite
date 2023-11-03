import "../CSS/Signout.css";

const Signout = ({ handleSignout }) =>
{
	return (
		<div>
			<button onClick={handleSignout} className="btn-signin-out"> Sign Out </button>
		</div>
	);
}
export default Signout;
