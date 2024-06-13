## Contact Management Application

This project is a Contacts Management Application that allows users to perform CRUD (Create, Read, Update, Delete) operations on contacts and group them. It uses Vue.js for the front end to provide a responsive and interactive user interface, and Laravel for the backend to handle data storage and API endpoints.

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
    - Seed the Database to generate default data `php artisan db:seed`

4. Run the development server:
    `php artisan serve` # Start the Laravel development server
    `npm run dev` # Start the Vue.js development server
The Laravel server will start at `http://localhost:8000`, and the Vue.js development server will start at `http://localhost:8080` (or another port if specified).

5. Access the application:

Open your web browser and go to `http://localhost:8080` to access the application.

You will see a page like this ![image](https://github.com/evansroy/contact-management/assets/51271888/a0a31a2e-35be-45f5-bcfa-ec3a409d2d91)
Click on Add Contact button, The following will be shown fill the details and click on submit to add new contact
![image](https://github.com/evansroy/contact-management/assets/51271888/de6b1b3e-80a4-4e3d-979d-69d0befd1089)

On the Nav bar on your right click on groups and a list of all groups will be shown as below 
![image](https://github.com/evansroy/contact-management/assets/51271888/45576fff-f2d9-404b-a76d-febb65bf7274)

To add a Group click on Add group button and Form will be show as below : 
![image](https://github.com/evansroy/contact-management/assets/51271888/63b8f11c-bd58-476a-a035-f946e09ac50c)

After filling the the form click on submit button to add group

You can also click on View details button to view the group detail and the contacts associated to the groups.
Edit button to Edit Details of the group. the some logic applies on contact section also.







