import React from "react";
import { X } from "react-feather";

function ColorBlock({ color, index, updateColor, removeColor }) {
	const name = `color-${index + 1}`;

	return (
		<li className="colorblock">
			<label className="colorblock-label" htmlFor={name}>
				{name}
			</label>
			<input className="colorblock-input" type="color" value={color} onChange={(event) => updateColor(event.target.value, index)} />
			<button
				className="colorblock-button"
				onClick={() => {
					removeColor(index);
				}}>
				<X />
			</button>
		</li>
	);
}

export default ColorBlock;
