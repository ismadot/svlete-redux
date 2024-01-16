# Svlete-Redux Project 🌐

Welcome to the `svlete-redux` repository, a showcase project demonstrating the seamless integration of Svelte with Redux Toolkit for efficient and modern state management. 🛠️

## About The Project 📘

This project serves as an illustrative example of combining Redux Toolkit with Svelte to construct reactive and scalable web applications. It provides insights into handling both local and global state management effectively within a Svelte environment. 🚀

### Key Features 🌟

- **Svelte-Redux Integration:** Demonstrating the use of Redux Toolkit in a Svelte setting.
- **Global and Local State Management:** Clear examples of managing global state with Redux and local state with Svelte.
- **Custom Actions and Reducers:** Tailored implementation of actions and reducers for specific functionalities.
- **Custom Hooks Usage:** `useSelector` implementation to connect Svelte components with the Redux store.

## Project Structure 🗂️

The project is organized as follows:

- `src`: Contains the application's source code.
  - `./`: Svelte components.
  - `./lib/store`: Redux logic, including actions, reducers, and store configuration.
- `public`: Static files for the application.

## Getting Started 🚀

To get started with this project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ismadot/svlete-redux.git
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Project:**

   ```bash
   npm run dev
   ```

## Store Configuration Explained 📚

The Redux store in this project is set up to manage global application state. Here's a breakdown of its configuration:

- **Actions (appActions.ts):** Define various actions like addPlus, addMinus, and setUsername for updating the state.

- **Reducers (appReducer.ts):** Handle state changes in response to dispatched actions. This includes incrementing/decrementing a counter and setting a username.
- **Store (config.ts):** Combines reducers using combineReducers and configures the store with configureStore. Additionally, integrates with Svelte's reactive system using a custom bindReduxStore function, allowing Svelte components to subscribe to Redux state updates.

## Acknowledgments 🙏

A special thanks to Sony AK for his insightful [blog post](https://dev.to/sonyarianto/using-redux-with-svelte-and-sveltekit-28oc) on using Redux with Svelte and SvelteKit. His clear explanations and practical examples have been a valuable resource in the development of this project. Be sure to check out his work on [GitHub](https://github.com/sonyarianto) for more amazing contributions to the open-source community. Thank you, Sony, for your inspiring work!

## Contributions 🤝

Contributions are welcome! If you have any ideas or proposals to enhance this project, feel free to open an issue or submit a pull request. 🙌

## License 📜

This project is licensed under the MIT License. Feel free to use, study, modify, and distribute it.
