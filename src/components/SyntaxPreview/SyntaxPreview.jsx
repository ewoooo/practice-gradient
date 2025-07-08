import React from "react";

function SyntaxPreview({ syntax }) {
	function handleCopy() {
		navigator.clipboard.writeText(syntax);
	}

	return (
		<div className="preview-syntax">
			{syntax}
			<button onClick={handleCopy}>Copy</button>
		</div>
	);
}

export default SyntaxPreview;
