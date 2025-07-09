# Express Routers Practice – Posts & Comments API

This project is a practice exercise for modularizing Express.js route handlers using `express.Router()` and ESM (`type: "module"`).  
The goal was to structure routes in separate files and implement nested routing with parameters.

## Features

- Modular route structure using separate files
- `/greet` route in `routes/greet.js`
- Full CRUD API for `/users` in `routes/users.js`
- Nested comments under `/posts/:postId/comments` using:
  - `mergeParams: true`
  - Middleware for validating post existence
  - Shared in-memory data (`posts` and `comments`)

## Technologies

- Node.js
- Express.js (with ESM syntax)

## Getting Started

```bash
npm install
node app.js
