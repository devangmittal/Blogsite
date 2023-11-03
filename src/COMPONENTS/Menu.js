import { Link } from "react-router-dom";
import "../CSS/Menu.css";

const Menu = () =>
{
	return (
		<div className="menu">

			<Link to="/"> Home </Link>
			<Link to="/about-us"> About </Link>
			<Link to="/contact-us"> Contact </Link>

		</div>
	);
}
export default Menu;