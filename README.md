# 🛍️ CPE React Workshop 1 - Simple Shop

A simple and elegant product management web application built with React, TypeScript, Vite, TailwindCSS, and Context API.  
Designed for learning and practicing frontend best practices including routing, global state management, form handling, and API interaction.

---

## 🚀 Features

- 📦 Product Listing (with Pagination and Search)
- 🔎 Product Detail Page
- ➕ Add New Product
- 🔐 Login & Authentication (with Protected Routes)
- 🛡️ Route Guards
- 💤 Lazy Load Pages (with React Suspense)
- 🔥 Full Page Loading during Route Changes
- ⚡ API interaction with mock server (json-server)

---

## 🛠️ Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/en/main)
- [Tailwind CSS](https://tailwindcss.com/)
- [Context API + useReducer](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [json-server](https://github.com/typicode/json-server) (for mock API)

---

## 📦 Project Structure

```plaintext
src/
|-- assets/             # Asset Files
├── components/         # Reusable Components (e.g., Navbar, ProductCard)
├── stores/             # Global State (ProductContext, AuthContext)
├── core/               # Core functionalities (e.g., Guards)
├── pages/              # Main Pages (Home, Products, AddProduct, ProductDetail, Login, NotFound)
├── hooks/              # Custom Hooks
├── routes/             # Routes configuration (Lazy Loading Routes)
├── services/           # API services (ProductService)
├── types/              # TypeScript types and interfaces
├── App.tsx             # Main App Entry
└── main.tsx            # Vite Entry Point
```

## 🧪 Installation
```plaintext
# 1. Clone this repository
git clone https://github.com/your-username/cpe-react-workshop-1.git
cd cpe-react-workshop-1

# 2. Install dependencies
npm install
npm install-server

# 3. Start the development server
npm run dev
npm run server
```

## 🔥 Usage
•	Go to http://localhost:5173
•	Login using:
  •	Username: admin
  •	Password: 1234
•	Explore the features like:
  •	View Products
  •	Add New Product
  •	View Product Detail
  •	Protected Routes (Add Product only after login)


## 📖 Learning Objectives
•	Understand how to setup React + TypeScript project with Vite
•	Master React Router v6 for multi-page routing
•	Apply useState, useEffect, useReducer, useContext for real-world problems
•	Design clean and maintainable project structure
•	Optimize performance using React Lazy and Suspense
•	Build beautiful UI fast with TailwindCSS

## 🙌 Acknowledgments
This workshop is designed for educational purposes to help Computer Engineering students practice React + TypeScript development.


## 🧙‍♂️ Author
•	Instructor: Nat Tanchotchuang
  •	Workshop: CPE React Workshop Step