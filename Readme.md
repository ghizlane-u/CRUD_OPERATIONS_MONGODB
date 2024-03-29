# Simple CRUD Application with Express.js and MONGODB

## Installation

1. Clone this repository to your local machine:
   git clone `https://github.com/ghizlane-u/CRUD_OPERATIONS_MONGODB`

2. Navigate to the project directory:

   cd <project_directory>

3. Install dependencies:

   npm install

## Usage

1. Start the server:

node app.js or nodemon (if you have installed it)

2. The server will be running at `http://localhost:3000` by default.

3.go to /register and enter your information so you can get the jwt token generated or /login if you already have an account

4. You can perform CRUD operations using the following endpoints:

   - `GET/posts`: Retrieve all posts.
   - `POST/posts`:  Create a new post.
   - `PUT /posts/:id`: Update an existing post.
   - `DELETE /posts/:id`: Delete a post by ID.

## File Structure

- `app.js`: Entry point of the application.
- `controllers/postController.js`: Controller functions for handling CRUD operations.
- `controllers/userController.js`: Controller functions for handling user authentification systeme.
- - `middleware/ensureToken.js`: middleware for stopping non-authentificated users from accessing routes that require authentication.
- `routes/userRoutes.js`: register  and login Routes.
- `routes/postRoutes.js`: post Routes(protected by ensureToken middleware).
- `medels/User.js`:User model.
- `medels/blog.js`: Post model.
