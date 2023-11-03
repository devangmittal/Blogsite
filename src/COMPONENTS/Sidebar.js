import React from "react";
import { Collapse } from 'antd';

const Sidebar = ({ selectedOption, handleOptionChange, titleStyle, bodyStyle, applyTheme, setTitleStyle, setBodyStyle }) =>
{
	return (
		<React.Fragment>
			<Collapse
				items={[
					{
						key: '1',
						label: 'Default Themes',
						children:
							<div className="custom-style-container">
								<section>
									<h3>Select a Theme:</h3>
									<label>
										<input
											type="radio"
											value="default"
											checked={selectedOption === 'default'}
											onChange={handleOptionChange}
										/>
										Default
									</label>

									<label>
										<input
											type="radio"
											value="option2"
											checked={selectedOption === 'option2'}
											onChange={handleOptionChange}
										/>
										Option 2
									</label>

									<label>
										<input
											type="radio"
											value="option3"
											checked={selectedOption === 'option3'}
											onChange={handleOptionChange}
										/>
										Option 3
									</label>
									<p>You selected: {selectedOption}</p>
								</section>
								<section>
									<input value="Title" disabled style={titleStyle} />
									<input value="Body" disabled style={bodyStyle} />
								</section>
								<section>
									<button onClick={applyTheme}>Apply</button>
								</section>

							</div>,
					},
					{
						key: '2',
						label: 'Custom Options',
						children:
							<div className="custom-style-container">
								<section>
									<h3>Title: </h3>
									<label for="titlefontsize">Font Size</label>
									{/* <input type="number" placeholder="Select from 0px to 40px" min="0" max="40"></input> */}
									<input type="range" id="slider" name="slider" min="0" max="40" step="1" onChange={(e) => setTitleStyle((prevStyle) => ({ ...prevStyle, fontSize: e.target.value + "px" }))}></input>

									<label for="titlefontcolor">Font Color</label>
									<select id="titlefontcolor" name="titlefontcolor" onChange={(e) => setTitleStyle((prevStyle) => ({ ...prevStyle, color: e.target.value }))}>
										<option value="white">Default</option>
										<option value="black">Black</option>
										<option value="white">White</option>
										<option value="pink">Pink</option>
										<option value="yellow">Yellow</option>
										<option value="brown">Brown</option>
										<option value="gray">Gray</option>
										<option value="purple">Purple</option>
									</select>
									<br />
									<label for="titlebgcolor">Background Color</label>
									<select id="titlebgcolor" name="titlebgcolor" onChange={(e) => setTitleStyle((prevStyle) => ({ ...prevStyle, backgroundColor: e.target.value }))} >
										<option value="white">Default</option>
										<option value="black">Black</option>
										<option value="white">White</option>
										<option value="pink">Pink</option>
										<option value="yellow">Yellow</option>
										<option value="brown">Brown</option>
										<option value="gray">Gray</option>
										<option value="purple">Purple</option>
									</select>

								</section>
								<section>

									<h3>Body: </h3>
									<label for="bodyfontsize">Font Size</label>
									{/* <input type="number" placeholder="Select from 0px to 40px" min="0" max="40"></input> */}
									<input type="range" id="slider" name="slider" min="0" max="40" step="1" onChange={(e) => setBodyStyle((prevStyle) => ({ ...prevStyle, fontSize: e.target.value + "px" }))}></input>

									<label for="bodyfontcolor">Font Color</label>
									<select id="bodyfontcolor" name="bodyfontcolor" onChange={(e) => setBodyStyle((prevStyle) => ({ ...prevStyle, color: e.target.value }))}>
										<option value="white">Default</option>
										<option value="black">Black</option>
										<option value="white">White</option>
										<option value="pink">Pink</option>
										<option value="yellow">Yellow</option>
										<option value="brown">Brown</option>
										<option value="gray">Gray</option>
										<option value="purple">Purple</option>
									</select>
									<br />
									<label for="bodybgcolor">Background Color</label>
									<select id="bodybgcolor" name="bodybgcolor" onChange={(e) => setBodyStyle((prevStyle) => ({ ...prevStyle, backgroundColor: e.target.value }))}>
										<option value="white">Default</option>
										<option value="black">Black</option>
										<option value="white">White</option>
										<option value="pink">Pink</option>
										<option value="yellow">Yellow</option>
										<option value="brown">Brown</option>
										<option value="gray">Gray</option>
										<option value="purple">Purple</option>
									</select>


								</section>
								<section>
									<input value="Title" disabled style={titleStyle} />
									<input value="Body" disabled style={bodyStyle} />
								</section>
								<section>
									<button onClick={applyTheme}>Apply</button>
								</section>
							</div>,
					},
				]}
			/>

		</React.Fragment>
	);
}
export default Sidebar;