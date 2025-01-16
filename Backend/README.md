# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account in the database with the provided information.

### HTTP Method

`POST`

### Endpoint

`/users/register`

### Request Body

The request body must be a JSON object with the following properties:

- `fullName` (object):
    - `firstName` (string, required): The first name of the user.
    - `lastName` (string, required): The last name of the user.
- `email` (string, required): The email address of the user.
- `password` (string, required): The password of the user.

### Example Response

- `user` (object):
    - `fullName` (object):
        - `firstName` (string): The first name of the user.
        - `lastName` (string): The last name of the user.
    - `email` (string): The email address of the user.
    - `createdAt` (string): The date and time when the user account was created.
- `token` (string): The JSON Web Token (JWT) that must be included in the `Authorization` header of all subsequent requests to authenticate the user.

