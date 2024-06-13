## Contact Management Application

This project is a Contacts Management Application that allows users to perform CRUD (Create, Read, Update, Delete) operations on contacts and group them. It uses Vue.js for the frontend to provide a responsive and interactive user interface, and Laravel for the backend to handle data storage and API endpoints.

## Features

-   CRUD Operations: Create, Read, Update, and Delete contacts.
-   Grouping: Group contacts into categories.
-   Search: Search contacts by name, email, or group.
-   Responsive UI: User-friendly interface accessible on desktop and mobile devices.

## Technologies Used

-   Vue.js: Frontend framework for building reactive user interfaces.
-   axios: HTTP client for making API requests from Vue.js to Laravel backend.
-   Laravel: Backend framework for handling CRUD operations and serving API endpoints.
-   MySQL : Database management system for storing contacts and groups.
-   Tailwind CSS: CSS framework for styling the frontend components.
-   vue-toastification: Library for displaying toast notifications.

## Setup Instruction

To run this project Locally, follow these steps:

1. Clone the repository:
   `git clone https://github.com/evansroy/contact-management.git`

    `cd contact-management`

2. Install dependencies:
   `composer install` # Install PHP dependencies for Laravel
   `npm install` # Install Node.js dependencies for Vue.js
3. Database setup:
   - Create a new database for the project.

   - Copy `.env.example` to `.env` and configure your database connection settings:
        `DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=your_database_name
        DB_USERNAME=your_database_username
        DB_PASSWORD=your_database_password`
    - Run migrations to create database tables: `php artisan migrate`.

4. Run the development server:
    `php artisan serve` # Start the Laravel development server
    `npm run dev` # Start the Vue.js development server
The Laravel server will start at `http://localhost:8000`, and the Vue.js development server will start at `http://localhost:8080` (or another port if specified).

5. Access the application:

Open your web browser and go to `http://localhost:8080` to access the application.
