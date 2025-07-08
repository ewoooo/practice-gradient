import React from "react";

import GradientControls from "../GradientControls";
import GradientPreview from "../GradientPreview";

const DEFAULT_COLORS = ["#141414", "#ffffff", "#252525", "#ffffff"];

function Contents() {
	const [colors, setColors] = React.useState(DEFAULT_COLORS);
	const [angle, setAngle] = React.useState(180);
	const [positions, setPositions] = React.useState(Array.from({ length: DEFAULT_COLORS.length }).fill("0"));

	// Color Management
	function updateColor(value, index) {
		const nextArr = [...colors];
		nextArr[index] = value;
		setColors(nextArr);
	}

	function addColor() {
		setColors([...colors, "#141414"]);
	}

	function removeColor(index) {
		const nextArr = [...colors];
		nextArr.splice(index, 1);
		setColors(nextArr);
	}

	return (
		<main>
			<GradientPreview colors={colors} angle={angle} positions={positions} />

			<GradientControls
				colors={colors}
				removeColor={removeColor}
				updateColor={updateColor}
				addColor={addColor}
				angle={angle}
				setAngle={setAngle}
				positions={positions}
				setPositions={setPositions}
			/>
		</main>
	);
}

export default Contents;
