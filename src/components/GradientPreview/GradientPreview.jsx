import React from "react";
import SyntaxPreview from "../SyntaxPreview";

function GradientPreview({ colors, angle, positions }) {
	const stopLiteral = colors.map((color, index) => `${color} ${positions[index]}%`);
	const syntax = `linear-gradient(${angle}deg, ${stopLiteral.join(", ")})`;
	return (
		<section className="preview">
			<div className="preview-canvas-wrapper">
				<h3>Your Color</h3>
				<div className="preview-canvas" style={{ backgroundImage: syntax }}></div>
			</div>
			<SyntaxPreview syntax={syntax} />
		</section>
	);
}

export default GradientPreview;
