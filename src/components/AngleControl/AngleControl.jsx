import React from "react";

function AngleControl({ angle, setAngle }) {
	const angleRef = React.useRef(null);

	React.useEffect(() => {
		const node = angleRef.current;

		function updateAngle(event) {
			const rect = node.getBoundingClientRect();
			const cx = rect.left + rect.width / 2;
			const cy = rect.top + rect.height / 2;
			const dx = event.clientX - cx;
			const dy = event.clientY - cy;

			const rad = Math.atan2(dy, dx);

			// Add 360 to normalize degree from -180 ~ 180 to 0 ~ 180
			// Add 90 to normalize startpoint from -90 to 0
			const deg = (Math.round(rad * (180 / Math.PI)) + 450) % 360;

			setAngle(deg);
		}
		node.addEventListener("click", updateAngle);

		return () => {
			node.removeEventListener("click", updateAngle);
		};
	}, [angle, setAngle]);
	return (
		<div className="angle">
			<p className="angle-label">{angle}</p>
			<div className="angle-canvas canvas" ref={angleRef}>
				<div className="angle-needle" style={{ transform: `translate(-50%, -100%) rotate(${angle}deg)` }}></div>
				<div className="angle-center"></div>
			</div>
		</div>
	);
}

export default AngleControl;
