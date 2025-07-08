import "non.geist";
import "non.geist/font-faces/GeistMono-Regular.css";

import "./stylesheets/reset.css";
import "./stylesheets/typography.css";
import "./stylesheets/layout.css";
import "./stylesheets/components.css";
import "./App.css";

import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contents from "./components/Contents";

function App() {
	return (
		<div className="App">
			<Header />
			<Contents />
			<Footer />
		</div>
	);
}

export default App;
