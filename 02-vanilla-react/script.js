// Grab the root element and create a root react element
const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

// Create a react element
const Title = () => React.createElement("h1", null, "Example Button");

// Create a button component
const Button = () => {
	const [like, setLike] = React.useState(false);

	const handleClick = () => {
		setLike((prev) => !prev);
	};

	props = {
		className: "round-corners-blue-button",
		onClick: handleClick,
	}

	children = like ? "Dislike" : "Like";

	return React.createElement("button", props, children);
};

// Create 10 buttons
const Buttons = Array(10).fill(null).map(() => React.createElement(Button));

// Add the title and buttons to a div element and render it
const App = () => {
	return React.createElement("div", null, [
		React.createElement(Title),
		...Buttons,
	]);
};

// Render the app
root.render(React.createElement(App));
