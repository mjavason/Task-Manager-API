# Task Manager API

Task Manager API is a straightforward solution for efficiently managing your tasks. This API allows you to create, track, and set priorities for tasks with ease. The best part? User login and authentication are seamlessly handled on the backend with cookies, ensuring a secure user experience.

## Documentation

API documentation is available through Swagger and can be accessed [here](https://task-manager-ivkj.onrender.com/docs). You can explore the endpoints, schemas, and authentication details through the Swagger documentation.

## Main Scripts

1. **Build**

   - Command: `npm run build`
   - Description: Use this script to build the project. It's the first step to set up the API.

2. **Start**

   - Command: `npm run start`
   - Description: Once the project is built, you can start the API using this command. It's your go-to script for running the API in a production environment.

3. **Development Mode**
   - Command: `npm run dev`
   - Description: During development, use this script to start the API with live-reloading and other helpful tools. It's perfect for debugging and testing.

## Setting Up Environment Variables

Before running the Task Manager API, you need to set up the following environment variables. Create a `.env` file in the project root and add these variables with your own values:

```env
# Secret key for access token (replace 'xxxx' with your own secret)
ACCESS_TOKEN_SECRET=xxxx

# Application name (e.g., 'TemplateApp')
APP_NAME=TemplateApp

# Secret key for JWT (replace 'user' with your own secret)
JWT_SECRET=user

# Email address for sending emails (replace 'xxxx@mail.com' with your own email)
MAIL_ADDRESS=xxxx@mail.com

# Password for the email address (replace 'xxxx' with your own password)
MAIL_PASSWORD=xxxx

# MongoDB connection URL (replace 'xxxx' with your MongoDB URL)
MONGODB_URL=xxxx

# Name of the MongoDB database (replace 'xxxx' with your database name)
MONGO_DB_NAME=xxxx

# Secret key for refresh token (replace 'xxxx' with your own secret)
REFRESH_TOKEN_SECRET=xxxx

# Link to your site (replace 'xxxx' with your site link)
SITE_LINK=xxxx

# Default username (e.g., 'user@mail.com')
USERNAME=user@mail.com

## Getting Started

To get started with the Task Manager API, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/Task-Manager-API.git`

2. Install dependencies: `npm install`

3. Build the project: `npm run build`

4. Start the API:
   - For production use: `npm run start`
   - For development with live-reloading: `npm run dev`

## API Endpoints

The API provides the following endpoints for managing tasks:

- `GET /tasks`: Retrieve a list of all tasks.
- `POST /tasks`: Create a new task.
- `PATCH /tasks/:id`: Update an existing task.
- `DELETE /tasks/:id`: Delete a task.
- `GET /tasks/search`: Search for tasks based on query parameters.
- `GET /tasks/count`: Get the total count of tasks based on query parameters.
- `GET /tasks/exists`: Check if tasks exist based on query parameters.

## Authentication

User authentication is securely handled on the backend with cookies. This ensures a seamless and safe user experience. You can customize the authentication process to fit your requirements.

## Contributing

Contributions to the Event Ticketing API are welcome! If you'd like to contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Thoroughly test your changes.

5. Create a pull request with a clear description of your changes.

Your contributions are highly appreciated and will help improve the functionality and reliability of the API.