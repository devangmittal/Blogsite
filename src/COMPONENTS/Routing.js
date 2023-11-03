import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Addblog from "./Addblog";

const Routing = () =>
{
	return (
		<Routes>
			<Route path="/blog" element={<Blog />} />
			<Route path="/about-us" element={<About />} />
			<Route path="/contact-us" element={<Contact />} />
			<Route path="/" element={<Home />} />
			<Route path="/sign-up" element={<Signup />} />
			<Route path="/add-blog" element={<Addblog />} />

		</Routes>
	);

}
export default Routing;