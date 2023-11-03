import { useEffect, useState } from "react";
import '../CSS/Addblog.css'
import { useNavigate } from "react-router-dom";
import { Collapse } from 'antd';
import Sidebar from "./Sidebar";
import React from 'react';

const Addblog = () =>
{
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

	let [updateTitle, setUpdateTitle] = useState();
	let [updateBody, setUpdateBody] = useState();
	let [applied, setApplied] = useState(false);
	let [mainTitleStyle, setMainTitleStyle] = useState([{
		fontSize: '',
		backgroundColor: '',
		color: '',
	}]);
	let [mainBodyStyle, setMainBodyStyle] = useState([{
		fontSize: '',
		backgroundColor: '',
		color: '',
	}]);

	let navigate = useNavigate();
	// let [flag, setFlag] = useState(true);
	let [blogs, setBlogs] = useState([]);
	let [existingTitleStyle, setExistingTitleStyle] = useState([]);
	let [existingBodyStyle, setExistingBodyStyle] = useState([]);

	useEffect(() =>
	{
		if (localStorage.getItem('bloglist') !== null) {
			setBlogs(JSON.parse(localStorage.getItem('bloglist')));
		}
		if (localStorage.getItem('blogtitlestyle') !== null) {
			setExistingTitleStyle(JSON.parse(localStorage.getItem('blogtitlestyle')));
		}
		if (localStorage.getItem('blogbodystyle') !== null) {
			setExistingBodyStyle(JSON.parse(localStorage.getItem('blogbodystyle')));
		}
	}, []);




	const addBlog = () =>
	{
		if (updateTitle === undefined || updateBody === undefined) {
			alert("Please fill both the information");
			return;
		} else if (updateTitle.length === 0 || updateBody.length === 0) {
			alert("cannot be Blank");
			return;
		}
		let temp = {
			blogId: blogs.length + 1,
			title: updateTitle,
			body: updateBody
		}

		let newTitleStyle = {
			fontSize: titleStyle.fontSize,
			backgroundColor: titleStyle.backgroundColor,
			color: titleStyle.color,
			id: temp.blogId
		};
		let newBodyStyle = {
			fontSize: bodyStyle.fontSize,
			backgroundColor: bodyStyle.backgroundColor,
			color: bodyStyle.color,
			id: temp.blogId
		}



		localStorage.setItem('bloglist', JSON.stringify([...blogs, temp]));
		localStorage.setItem('blogtitlestyle', JSON.stringify([...existingTitleStyle, newTitleStyle]));
		localStorage.setItem('blogbodystyle', JSON.stringify([...existingBodyStyle, newBodyStyle]));
		alert("Successfully added");
		navigate("/");

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



	return (

		<div>
			<div className="blog-main-container">
				<div className="blog-container">
					<input
						type="text"
						placeholder="Enter Blog TItle"
						onChange={(e) => setUpdateTitle(e.target.value)}
						style={applied ? mainTitleStyle : null} />
					<textarea
						rows="15"
						cols="50"
						placeholder="Enter Blog Description"
						onChange={(e) => setUpdateBody(e.target.value)}
						style={applied ? mainBodyStyle : null} />
					<button className="blog-btn" onClick={addBlog}>Add Blog</button>
				</div>
				<div className="custom-option-container">

					<Sidebar selectedOption={selectedOption} handleOptionChange={handleOptionChange} titleStyle={titleStyle} bodyStyle={bodyStyle} applyTheme={applyTheme} setTitleStyle={setTitleStyle} setBodyStyle={setBodyStyle} />
				</div>

			</div>

		</div >
	);
}
export default Addblog;