import React from "react";

import { Plus } from "react-feather";
import ColorBlock from "../ColorBlock";

function ColorBlockShelf({ colors, addColor, removeColor, updateColor }) {
	return (
		<div>
			<ul className="colorblock-wrapper">
				{colors.map((color, index) => (
					<ColorBlock color={color} index={index} removeColor={removeColor} updateColor={updateColor} key={`color-${index}`} />
				))}
			</ul>
			<button onClick={addColor} className="colorblock-button">
				<Plus />
			</button>
		</div>
	);
}

export default ColorBlockShelf;
