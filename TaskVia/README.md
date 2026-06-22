# TaskVia - React Task Management Application

## Overview

TaskVia is a simple and interactive task management application built using React.js. The application helps users organize daily tasks by assigning priorities and categories, tracking completion status, and monitoring overall progress through a visual progress bar.

## Features

✅ Add new tasks

✅ Task input validation

✅ Assign task priorities:

* High
* Medium
* Low

✅ Categorize tasks:

* General
* Work
* Personal

✅ Mark tasks as completed

✅ Undo completed tasks

✅ Delete tasks

✅ Real-time progress tracking

✅ Responsive and user-friendly interface

## Validation Rules

The application validates task inputs before adding them:

* Empty tasks are not allowed
* Numeric-only tasks are not allowed
* Special characters are restricted
* Tasks must start with an alphabetic character

## Tech Stack

### Frontend

* React.js
* JavaScript (ES6)
* HTML5
* CSS3

## Project Structure

src/

├── TaskForm.js

├── TaskList.js

├── ProgressTracker.js

├── App.js

└── styles.css

## Components

### TaskForm

Responsible for:

* Accepting task input
* Selecting priority
* Selecting category
* Validating user input
* Adding tasks

### TaskList

Responsible for:

* Displaying tasks
* Completing tasks
* Undoing completed tasks
* Deleting tasks

### ProgressTracker

Responsible for:

* Calculating completed tasks
* Calculating completion percentage
* Rendering progress bar

## How to Run the Project

### Clone Repository

git clone https://github.com/sandhyatigadolli/TaskVia.git

### Navigate to Project Directory

cd TaskVia

### Install Dependencies

npm install

### Start Development Server

npm start

The application will run at:

http://localhost:3000

## Future Enhancements

* Local Storage Support
* Task Search Functionality
* Task Filtering
* Dark Mode
* Due Dates
* User Authentication
* Backend Integration using Spring Boot

## Learning Outcomes

This project helped in understanding:

* React Components
* Props
* State Management using useState
* Event Handling
* Form Validation
* Conditional Rendering
* Dynamic Styling
* Component-Based Architecture

## Author

Sandhya Subhas Tigadolli

MCA Student | Java Full Stack Developer

GitHub: https://github.com/sandhyatigadolli
