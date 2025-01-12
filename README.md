# SCM Frontend

This project is a frontend application for a Supply Chain Management (SCM) system built with React and Vite. It includes user authentication, password management, and a dashboard for managing supply chain operations.

## Table of Contents

- [SCM Frontend](#scm-frontend)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
  - [Dependencies](#dependencies)
  - [DevDependencies](#devdependencies)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- User authentication (login, register)
- Password management (forgot password, update password)
- Dashboard for managing supply chain operations
- Responsive design with Tailwind CSS
- Form validation with Formik and Yup
- Toast notifications with react-toastify

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/scm-frontend.git
   cd scm-frontend
   ```

2. Install the dependencies:
   ```sh
   npm install
    # or
    yarn install
   ```

# Running the Application

1. Start the development server:

```sh
npm run dev
#or
yarn dev
```

2. Open your browser and navigate to http://localhost:`port`.

# Project Structure

```bash
src/
├── App.jsx
├── assets/
├── components/
│   ├── pages/
│   │   ├── dashboard/
│   │   │   └── Dashboard.jsx
│   │   ├── login/
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── UpdatePassword.jsx
│   │   │   ├── useForgotPassword.jsx
│   │   │   ├── useLogin.jsx
│   │   │   └── useUpdatePassword.jsx
│   │   ├── register/
│   │   │   ├── Register.jsx
│   │   │   └── useRegister.jsx
├── hooks/
│   └── useAPI.jsx
├── index.css
├── main.jsx
```

# Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```sh
VITE_API_BASE_URL=http://localhost:5000/api/v1/
```

# Available Scripts

In the project directory, you can run:

- `npm run dev` or `yarn dev`: Runs the app in the development mode.
- `npm run build` or `yarn build`: Builds the app for production.
- `npm run lint` or `yarn lint`: Lints the codebase using ESLint.
- `npm run preview` or `yarn preview`: Previews the production build locally.

# Dependencies

- (axios): ^1.7.9
- `classnames`: ^2.5.1
- `formik`: ^2.4.6
- (react): ^18.3.1
- (react-dom): ^18.3.1
- (react-router-dom): ^7.1.1
- (react-toastify): ^11.0.2
- `yup`: ^1.6.1

# DevDependencies

- `@eslint/js`: ^9.17.0
- `@types/react`: ^18.3.18
- `@types/react-dom`: ^18.3.5
- `@vitejs/plugin-react`: ^4.3.4
- `autoprefixer`: ^10.4.20
- `eslint`: ^9.17.0
- `eslint-plugin-react`: ^7.37.2
- `eslint-plugin-react-hooks`: ^5.0.0
- `eslint-plugin-react-refresh`: ^0.4.16
- `globals`: ^15.14.0
- `postcss`: ^8.4.49
- `tailwindcss`: ^3.4.17
- `vite`: ^6.0.5

# Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

# License

This project is licensed under the MIT License.

# scm-frontend
