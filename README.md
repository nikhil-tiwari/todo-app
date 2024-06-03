# Todo App

## Overview

The Todo App is a simple and efficient task management application built with React and Redux Toolkit. It allows users to add, edit, delete, and mark tasks as completed. The app is styled for a modern look and provides a smooth user experience.

## Features

- **Add Tasks**: Quickly add new tasks to your list.
- **Edit Tasks**: Edit existing tasks seamlessly.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Mark as Completed**: Mark tasks as completed, with visual distinction for completed tasks.
- **Responsive Design**: The app is designed to be responsive and works well on both desktop and mobile devices.

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For managing application state.
- **CSS**: For styling the application.
- **React Hooks**: For managing component state and side effects.

## File Structure

- **App.js**: Main component that renders the header and task management functionalities.
- **store.js**: Configures the Redux store and combines reducers.
- **todoSlice.js**: Contains Redux slice for managing todos state.
- **header.js**: Header component for the application.
- **App.css**: Styles for the main application.
- **header.css**: Styles for the header component.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/todo-app.git
2. **Navigate to the project directory:**
   ```bash
   cd todo-app
3. **Install dependencies:**
   ```bash
   npm install
4. **Start the application:**
   ```bash
   npm start

## Usage

- **Adding a Task**: Enter your task in the input field and click "Add".
- **Editing a Task**: Click the "Edit" button next to the task, make your changes in the textarea, and click "Save changes".
- **Deleting a Task**: Click the "Delete" button next to the task you want to remove.
- **Marking a Task as Completed**: Click the "Completed" button to toggle the task's completion status.

## Customization

- **Styling**: Customize the look and feel of the app by modifying App.css and header.css.
- **State Management**: Modify or extend the Redux store and slices in store.js and todoSlice.js.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
