# Roadmap Application - README

## Overview

This project implements an interactive roadmap feature in Next.js, where users can visually track their progress through lessons. The application is designed to display a series of lessons in a roadmap format, with each lesson represented as a clickable circle. Users can navigate to specific lessons by clicking the circles, and their progress is saved. The application also includes smooth animations and a responsive, accessible design.

## Features

- **Lesson Roadmap**: Displays a list of lessons in a roadmap format with each lesson represented as a circle.
- **Progress Tracking**: The user’s progress is tracked and stored, either in the browser using `localStorage` or via an API.
- **Interactive UI**: Clicking a lesson circle will display a toast message with navigation to the relevant course page.
- **Smooth Animations**: Transitions between lesson stages are animated for a better user experience.
- **Responsive and Accessible**: The application is designed to be responsive across different screen sizes and accessible to users with various needs.

## File Structure

### `src/app/roadmap/page.jsx`

This file contains the main implementation of the roadmap page where lessons are displayed. The file includes:

1. **Rendering the Roadmap**: Displays a list of lessons dynamically.
2. **Lesson Progress**: Manages the user's progress and shows it visually (e.g., progressing circles).
3. **Toast Notifications**: Provides feedback when users interact with the lessons.
4. **Smooth Animations**: Controls animations for transitions between lessons.
5. **Responsive Layout**: Ensures the roadmap adapts to different screen sizes.

## How to Run the Application

### Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js**: Version 12 or higher.
- **npm** (Node Package Manager) or **yarn** (optional, but recommended).

Steps to run this project:
1) Open terminal in any folder and write git clone "https://github.com/shivamparksmart/analyticsvidhya_assignment1.git"
2) cd interactive-roadmap
3) npm i
4) npm run dev
5) hit http://localhost:3000/roadmap in the browser


