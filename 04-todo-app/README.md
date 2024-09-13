# JS + React + Mantine Template

This is a template for projects using [React](https://reactjs.org/) and
[Mantine](https://mantine.dev/) with JavaScript. It provides a solid,
customizable foundation for building modern web applications with ease.

## Features

- **React**: A popular JavaScript library for building user interfaces.
- **Mantine**: A fully featured component library with all the tools you need
to build a modern, user-friendly UI quickly.
- **JavaScript (ES6+)**: Modern JavaScript setup to keep your code efficient
and clean.
- **Pre-configured tools**: Includes basic configurations for ESLint, Prettier,
and other development scripts.
- **Dark Mode Support**: Integrated dark mode using Mantine's theming system.

## Requirements

Make sure you have the following installed before getting started:

- [Node.js](https://nodejs.org/) >= 22.3.x
- [npm](https://www.npmjs.com/)

## Template Usage

This template provides a basic structure for building React applications with
Mantine. You can start by modifying the existing components or creating new
ones to build your application.

1. Click on the `Use this template` button on the top right of the github
repository.
2. Click on the `Create a new repository` button.
3. Clone the new repository to your local machine.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/js-react-mantine-template.git
   ```

2. Navigate to the project directory:

   ```bash
   cd js-react-mantine-template
   ```

3. Install the dependencies:

   Using npm:

   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode. Open
[http://localhost:5173](http://localhost:5173) to view it in the browser. The
app will reload if you make edits.

### `npm run build`

Builds the app for production into the `build` folder. It optimizes the build
for the best performance.

### `npm run lint`

Runs ESLint to check for code style and syntax issues.

### `npm run preview`

Runs the production build locally to preview the app. Open
[http://localhost:4173](http://localhost:4173) to view it in the browser.

## Project Structure

```bash
.
├── public/               # Public files (index.html, favicon, etc.)
├── src/
│   ├── assets/           # Static assets like images and fonts
│   ├── components/       # Reusable React components
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Application pages
│   ├── App.jsx           # Root component
│   └── main.jsx          # Main React entry point
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Lock file for npm
├── postcss.config.cjs    # PostCSS configuration
├── README.md             # Project information
└── vite.config.js        # Vite configuration
```

## Customization

Feel free to modify the structure, components, and styling according to your
needs. Mantine's documentation is an excellent resource for customizing the UI
components to fit your project.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE)
file for more details.
