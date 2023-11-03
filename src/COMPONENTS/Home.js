import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../CSS/Home.css";
import "../CSS/Signout.css";


const Home = () =>
{

	let [blogs, setBlogs] = useState([]);
	useEffect(() =>
	{

		setBlogs(JSON.parse(localStorage.getItem('bloglist')));


	}, []);




	return (
		<div className="home-main-container">
			<div className="title">
				{
					blogs.length ? blogs.map((blog) => <Link to="/blog" state={{ id: blog.blogId, title: blog.title, body: blog.body }}><div><h2>{blog.title}</h2></div></Link>) : <div><h2>Start by Creating your first blog</h2></div>
				}
				<div>
					<Link to="/add-blog" ><button className="btn-signin-out btn-home">Add Blog</button></Link>
				</div>
			</div>
			<div>

			</div>
		</div>
	);
}
export default Home;