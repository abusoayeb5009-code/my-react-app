# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
# Dev Stack Builder

## Description
Dev Stack Builder is an interactive web application that helps developers discover, explore, and build their personalized technology stacks. Users can select technologies from various categories (Frontend, Backend, Database, Tools) and build their ideal project architecture dynamically with toast feedback and full responsive support.

## Technologies Used
- **React**: UI Library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Frontend Tooling and Build Utility
- **Tailwind CSS**: Utility-first CSS Framework
- **React Toastify**: Notification System
- **JSON**: Mock Data Source

## 3 Main Features
1. **Browse Development Technologies**: Explore various technologies with details, categories, difficulties, and ratings.
2. **Build a Personalized Tech Stack**: Select technologies into your stack sidebar with live counter updates.
3. **Dynamic Stack Management & Feedback**: Add and remove technologies dynamically with duplicate protection disabled buttons and instant Toast notifications.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like code directly inside JavaScript files. It is used in React because it makes writing UI components intuitive, visual, and combines layout logic with rendering logic seamlessly.

### 2. What is the difference between props and state?
**Answer:**
- **Props (Properties):** Immutable data passed from a parent component to a child component (read-only).
- **State:** Mutable data created and managed within a component that can change over time based on user interactions.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** The `useState` hook allows functional components to manage local state and re-render the UI when the state changes. In this project, `useState` is used in `App.tsx` to store the fetched list of technologies, stack selections, loading states, and errors. It is also used in `Navbar.tsx` to control the mobile menu toggle.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** The `useEffect` hook handles side effects in functional components, such as fetching data or setting up subscriptions. In this project, `useEffect` is used in `App.tsx` with an empty dependency array (`[]`) to fetch technology data from `data.json` once when the component mounts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the unique `key` prop to identify which items have changed, been added, or removed in a list. It optimizes rendering performance through DOM reconciliation without needing to re-render the entire list.

### 6. What is conditional rendering? Give an example from this project.
**Answer:** Conditional rendering means displaying different UI components or elements based on certain conditions or states.
**Example:** In `Sidebar.tsx`, if `stack.length === 0`, it renders `"Your stack is empty"`; otherwise, it renders the list of selected tech stack cards. Also, loading and error states in `App.tsx` use conditional rendering.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
- **Parent to Child:** Data is passed down via `props`.
- **Child to Parent:** The parent passes a callback function as a prop to the child, and the child calls that function with data/event arguments to update the parent's state.
-