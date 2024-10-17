# React Vite Starter

This project is a boilerplate setup for building React applications using **Vite**. It includes the necessary configurations, conventions, and tools to ensure a scalable and maintainable codebase for any React project.

## Table of Contents
1. [Project Setup](#project-setup)
2. [Folder Structure](#folder-structure)
3. [Coding Conventions](#coding-conventions)
4. [Git Guidelines](#git-guidelines)
5. [Contributing](#contributing)
6. [License](#license)

---

## Project Setup

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EHB-MCT/assignment-1-maxim-jochen.git
   cd assignment-1-maxim-jochen
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   This will start a development server at `http://localhost:5173/` (or a similar port).

4. **Build for production:**
   ```bash
   npm run build
   ```
   This will create an optimized build of your project in the `dist/` folder.

---

## Folder Structure

This project follows a structured folder organization to ensure scalability and clarity:

```
.
├── public/                    # Static assets (index.html, favicon, etc.)
│   └── favicon.ico
├── src/                       # Source code
│   ├── api/                   # API calls
│   │   └── fetchData.js
│   ├── assets/                # Images, fonts, and static files
│   │   ├── images/
│   │   └── fonts/
│   ├── components/            # Reusable components
│   │   ├── layout/            # Layout components (e.g., header, footer)
│   │   ├── ui/                # UI components (e.g., buttons, inputs)
│   │   └── common/            # Common utilities (e.g., loader, modal)
│   ├── hooks/                 # Custom React hooks
│   │   └── useFetch.js
│   ├── modules/               # Feature-specific modules
│   │   └── auth/              # Example feature module (e.g., authentication)
│   │       ├── components/
│   │       ├── pages/
│   │       └── services.js
│   ├── pages/                 # Main views/pages of the app
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── services/              # Shared services and API calls
│   │   └── apiService.js
│   ├── styles/                # Global styles (CSS/SASS modules)
│   │   └── main.css
│   ├── utils/                 # Utility functions/helpers
│   │   └── formatDate.js
│   ├── App.jsx                # Main application component
│   ├── index.jsx              # Entry point for the app
├── eslint.config.js           # ESLint configuration
├── package.json               # NPM dependencies and scripts
├── vite.config                # Vite configuration
└── README.md                  # Project documentation
```

---

## Coding Conventions

### 1. **Formatting**
**Rules:**
- Follow the **Airbnb** style guide.
- Use **camelCase** for variables and functions.
- Use **PascalCase** for React component names.

### 2. **File and Component Naming**
- Components are stored in the `components/` folder and are named using **PascalCase** (e.g., `Header.jsx`).
- Hooks are stored in the `hooks/` folder and are named using **camelCase** (e.g., `useFetch.js`).

---

## Git Guidelines

This project follows the **Git Flow** model with feature branches.

### 1. **Branching Strategy**
- **`main`**: Production-ready code.
- **`develop`**: Active development branch.
- **`features`**: For adding new features.
- **`hotfix`**: For bug fixes.
- **`release`**: For final polishing, testing, and bug fixing before merging into main.

### 2. **Conventional Commit Messages**
We follow the **Conventional Commits** specification to ensure that the commit history is readable and meaningful. Here are the types of commits:
- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation-only changes.
- **style**: Code formatting, not affecting functionality.
- **refactor**: Code change that neither fixes a bug nor adds a feature.
- **test**: Adding or fixing tests.
- **chore**: Changes to the build process or dependencies.

#### Examples:
```bash
feat(auth): add user login functionality
fix(header): resolve layout issue in mobile view
docs(readme): update installation instructions
```

### 3. **Git Flow**
- Make sure you branch off from `develop`.
- Once your feature is complete, create a pull request to merge it into `develop`.

---

## Contributing

To contribute to this project, follow these guidelines:

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/EHB-MCT/assignment-1-maxim-jochen.git
   ```
3. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature
   ```
4. **Make your changes** and commit them using **conventional commit messages**.
5. **Push to your branch** and create a **pull request** on GitHub.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## Attribution

This project was made with:
- The information from the given [Powerpoint](https://canvas.ehb.be/courses/40240/files/2990444?module_item_id=687239) slides from the Development V lectures
- Documentation from the official [Vite website](https://vite.dev/guide/)
- Documentation from the official [React website](https://react.dev/reference/react)
- Documentation from the official [Hands on React website](https://handsonreact.com/docs)
