import React from "react";

import BezierEasing from "bezier-easing";
import { BezierEditor } from "bezier-editor";

const DEFAULT_CURVE = [0.35, 0.1, 0.65, 0.9];

function PositionControl({ positions, setPositions, length }) {
	const [curve, setCurve] = React.useState(DEFAULT_CURVE);

	React.useEffect(() => {
		function updatePositions(graph) {
			const bezierValues = graph;
			const bezier = BezierEasing(...bezierValues);
			const calculated = Array.from({ length }, (_, i) => Math.round(bezier(i / (length - 1)) * 100));
			setPositions(calculated);
		}
		updatePositions(curve);
	}, [length, curve, setPositions]);

	return (
		<div>
			<p className="position-label">{positions}</p>
			<div className="position-canvas canvas">
				<BezierEditor
					value={curve}
					onChange={(event) => {
						setCurve(event);
					}}
					width={400}
					height={400}
					gridColor="transparent"
					background="transparent"
					handleColor="white"
				/>
			</div>
		</div>
	);
}

export default PositionControl;
