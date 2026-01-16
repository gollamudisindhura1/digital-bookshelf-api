# Digital Bookshelf API - LAB

A RESTful backend API for a local library's book tracking system, built with Node.js, Express, and Mongoose.  
This API allows librarians to manage the book inventory by performing full CRUD operations (Create, Read, Update, Delete) on book records.

## Overview
A local library is modernizing its book tracking system.  
This "Digital Bookshelf" API serves as the backend foundation, enabling librarians to:
- Add new books
- View the full inventory
- Find specific books by ID
- Update book details
- Remove books from the collection

## Learning Objectives
- Define and validate Mongoose schemas/models
- Build modular, RESTful Express routes
- Implement full CRUD operations with async/await
- Securely connect to MongoDB Atlas using environment variables
- Handle request data (req.body, req.params) and errors properly

## Tech Stack
- Node.js
- Express.js (web framework)
- Mongoose (MongoDB ODM)
- dotenv (environment variables)
- MongoDB Atlas (cloud database)


## Reflection Questions
1. Why is it beneficial to separate your routes, models, and database connection into different directories?
-  Separating routes, models, and DB connection makes the code easier to read, find, and fix.
- It keeps things organized and reusable as the project grows.

2. What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?
- PUT replaces the whole resource with new data.
- PATCH only updates some fields.
- PUT /:id more closely resembles PUT (full replace), but it acts like PATCH since it updates only sent fields.

3. In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?
- Send a simple success message like "Book deleted" with 200 or 204 status.