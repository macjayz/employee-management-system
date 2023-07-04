# EmployeeManagementSystem

To run the Employee Management System application built with Angular, follow the instructions below. Ensure that you have Node.js and Angular CLI installed on your machine before proceeding.

## Getting Started

### Prerequisites
1. Node.js: Ensure you have Node.js installed on your machine. You can download and install it from the official Node.js website (https://nodejs.org/).

2. Angular CLI: Install Angular CLI globally using npm with the following command in your terminal or command prompt:
```
npm install -g @angular/cli
```

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd employee-management-system
```

2. Install project dependencies:

```bash
npm install
```

3. API Endpoint Configuration:
   - Before running the application, you need to set up a backend API to handle CRUD operations for employees. The Angular application expects the API to be available at a specific endpoint. You can either use a mock API, or set up a real backend server using technologies like Node.js with Express, Django, or any other server-side technology of your choice. Make sure to set the API endpoint URL in the Angular application.

4. Run the application:

```bash
ng serve
```

This will start the development server, and the application will be accessible at `http://localhost:4200/`.

## Features

1. Displaying a list of employees in a table format with columns: ID, Name, Position, and Actions.

2. Adding new employees:
   - A form for adding new employees with fields for ID, Name, and Position.
   - Form input validation with appropriate error messages.
   - Adding a new employee to the list upon successful form submission.
   - Clearing the form after adding a new employee.

3. Reading employee data:
   - Fetching the employee list from the API endpoint using the HttpClient module.
   - Displaying the employee list in the table.

4. Updating employee data:
   - "Edit" button in each row of the employee table.
   - Clicking the "Edit" button opens a modal or a separate page with a form pre-filled with the employee's current data.
   - Allowing editing the employee's Name and Position.
   - Form input validation with appropriate error messages.
   - Updating the employee's data upon successful form submission.

5. Deleting employees:
   - "Delete" button in each row of the employee table.
   - Clicking the "Delete" button displays a confirmation dialog.
   - If confirmed, deletes the employee from the list and updates the table accordingly.

6. Angular Reactive Forms:
   - Using Angular Reactive Forms for handling form inputs and validations.

7. Error Handling:
   - Proper error handling and display of error messages when API requests fail.

8. CSS Styling:
   - The application has a visually appealing user interface with proper CSS styling.

## Additional Notes

- Replace `<repository-url>` with the actual URL of the repository if it is hosted on a remote platform like GitHub, GitLab, or Bitbucket.

- Ensure that the backend API is up and running and that the Angular application is configured to make API requests to the correct endpoint.

- For real-world deployment, consider configuring your application for production and hosting it on a web server.
