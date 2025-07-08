import React from "react";

import ColorBlockShelf from "../ColorBlockShelf";
import AngleControl from "../AngleControl";
import PositionControl from "../PositionControl";

function GradientControls({ addColor, removeColor, updateColor, colors, angle, setAngle, positions, setPositions }) {
	return (
		<section className="controls">
			<ColorBlockShelf addColor={addColor} removeColor={removeColor} updateColor={updateColor} colors={colors} />
			<AngleControl angle={angle} setAngle={setAngle} />
			<PositionControl positions={positions} setPositions={setPositions} length={colors.length} />
		</section>
	);
}

export default GradientControls;
