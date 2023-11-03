import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../CSS/Addblog.css'
import '../CSS/Blog.css'
import { Button, Popconfirm } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';




const Blog = () =>
{
	let navigate = useNavigate();

	let blog = useLocation();
	let body = blog.state.body;
	let title = blog.state.title;
	let id = blog.state.id;
	let [updateTitle, setUpdateTitle] = useState(title);
	let [updateBody, setUpdateBody] = useState(body);
	let [blogs, setBlogs] = useState([]);
	const [isDisabled, setIsDisabled] = useState(true);
	let [mainTitleStyle, setMainTitleStyle] = useState({});
	let [mainBodyStyle, setMainBodyStyle] = useState({});
	let [existingTitleStyle, setExistingTitleStyle] = useState([]);
	let [existingBodyStyle, setExistingBodyStyle] = useState([]);


	let [selectedOption, setSelectedOption] = useState('default');
	let [titleStyle, setTitleStyle] = useState({
		fontSize: '15px',
		backgroundColor: '',
		color: '',
	});

	let [bodyStyle, setBodyStyle] = useState({
		fontSize: '15px',
		backgroundColor: '',
		color: '',
	});

	let [applied, setApplied] = useState(false);

	const applyTheme = () =>
	{
		setMainTitleStyle({
			fontSize: titleStyle.fontSize,
			backgroundColor: titleStyle.backgroundColor,
			color: titleStyle.color,
		});
		setMainBodyStyle({
			fontSize: bodyStyle.fontSize,
			backgroundColor: bodyStyle.backgroundColor,
			color: bodyStyle.color,
		});
		setApplied(true);
	}

	// Event handler for option selection
	const handleOptionChange = (event) =>
	{
		let temp = event.target.value;
		setSelectedOption(temp);
		if (temp === "default") {

			setTitleStyle({
				fontSize: "15px",
				backgroundColor: "",
				color: "",
			});
			setBodyStyle({
				fontSize: "15px",
				backgroundColor: "",
				color: "",
			});

		} else if (temp === "option2") {

			setTitleStyle({
				fontSize: "10px",
				backgroundColor: "pink",
				color: "blue",
			});
			setBodyStyle({
				fontSize: "10px",
				backgroundColor: "pink",
				color: "blue",
			});

		} else if (temp === "option3") {


			setTitleStyle({
				fontSize: "20px",
				backgroundColor: "yellow",
				color: "brown",
			});
			setBodyStyle({
				fontSize: "20px",
				backgroundColor: "yellow",
				color: "brown",
			});

		}
	}



	useEffect(() =>
	{

		if (localStorage.getItem('bloglist') !== null) {
			setBlogs(JSON.parse(localStorage.getItem('bloglist')));
		}
		if (localStorage.getItem('blogtitlestyle') !== null) {
			setExistingTitleStyle(JSON.parse(localStorage.getItem('blogtitlestyle')));
			let temp = JSON.parse(localStorage.getItem('blogtitlestyle'));
			setMainTitleStyle(temp.find((style) => style.id === id));
		}
		if (localStorage.getItem('blogbodystyle') !== null) {
			setExistingBodyStyle(JSON.parse(localStorage.getItem('blogbodystyle')));
			let temp = JSON.parse(localStorage.getItem('blogbodystyle'));
			setMainBodyStyle(temp.find((style) => style.id === id));
		}

	}, []);


	const verifyID = existingTitleStyle.some(title => title.id === id);


	const updateBlog = () =>
	{
		if (isDisabled) {
			setIsDisabled(false);
		} else {

			if (updateTitle === undefined || updateBody === undefined) {
				alert("Please fill both the information");
				return;
			} else if (updateTitle.length === 0 || updateBody.length === 0) {
				alert("cannot be Blank");
				return;
			}

			let updatedblog = {
				title: updateTitle,
				body: updateBody
			};

			let tempBlogs = blogs.map((blog) =>
			{
				if (blog.blogId == id) {
					blog.title = updatedblog.title;
					blog.body = updatedblog.body;
					return blog;
				} else {
					return blog;
				}

			});
			setBlogs(tempBlogs);

			let newTitleStyle = existingTitleStyle.map((style) =>
			{
				if (style.id == id) {
					style.fontSize = titleStyle.fontSize;
					style.backgroundColor = titleStyle.backgroundColor;
					style.color = titleStyle.color;
					return style;
				} else {
					return style;
				}
			});
			setExistingTitleStyle(newTitleStyle);

			let newBodyStyle = existingBodyStyle.map((style) =>
			{
				if (style.id == id) {
					style.fontSize = bodyStyle.fontSize;
					style.backgroundColor = bodyStyle.backgroundColor;
					style.color = bodyStyle.color;
					return style;
				} else {
					return style;
				}
			});
			setExistingBodyStyle(newBodyStyle);

			localStorage.setItem('bloglist', JSON.stringify(tempBlogs));
			localStorage.setItem('blogtitlestyle', JSON.stringify(newTitleStyle));
			localStorage.setItem('blogbodystyle', JSON.stringify(newBodyStyle));
			setIsDisabled(true);
			alert("Blog Updated");
			navigate("/");

		}
	}

	const deleteBlog = () =>
	{

		let temp = blogs.filter((blog) => blog.blogId != id);
		setBlogs(temp);

		localStorage.setItem('bloglist', JSON.stringify(temp));
		navigate("/");

	}
	return (

		<div>



			<div className="blog-main-container">
				<div className="blog-container">
					<input
						type="text"
						placeholder="Enter Blog TItle"
						defaultValue={title}
						onChange={(e) => setUpdateTitle(e.target.value)}
						disabled={isDisabled}
						style={applied ? mainTitleStyle : (verifyID ? mainTitleStyle : null)}

					/>
					<textarea
						rows="15"
						cols="50"
						placeholder="Enter Blog Description"
						defaultValue={body}
						onChange={(e) => setUpdateBody(e.target.value)}
						disabled={isDisabled}
						style={applied ? mainBodyStyle : (verifyID ? mainBodyStyle : null)}

					/>

					<div className="blog-btn-container">
						<Popconfirm

							title="Are you sure?"
							description="This will permanently delete this blog."
							onConfirm={deleteBlog}

						> <Button className="blog-btn blog-btn-css" >Delete Blog</Button>
						</Popconfirm>
						<button className="blog-btn blog-btn-css" onClick={updateBlog}>Update Blog</button>
					</div>
				</div>
				<div className="custom-option-container">
					{!isDisabled
						?
						<Sidebar selectedOption={selectedOption} handleOptionChange={handleOptionChange} titleStyle={titleStyle} bodyStyle={bodyStyle} applyTheme={applyTheme} setTitleStyle={setTitleStyle} setBodyStyle={setBodyStyle} />
						:
						null}
				</div>

			</div>

		</div >
	);
}
export default Blog;