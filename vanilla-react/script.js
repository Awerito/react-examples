const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

const title = React.createElement("h1", null, "Example Button");
const button = React.createElement("button", null, "Like");
const div = React.createElement("div", null, [title, button]);

root.render(div);
