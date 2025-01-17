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
    - `password` (string): The hashed password of the user.
- `token` (string): The JSON Web Token (JWT) that must be included in the `Authorization` header of all subsequent requests to authenticate the user.

## `/users/login` Endpoint

### Description
This endpoint is used to log in an existing user. It validates the input data and checks the credentials against the database.

### HTTP Method
`POST`

### Endpoint
`/users/login`

### Request Body
The request body should be a JSON object with the following fields:

- `email`: A string representing the user's email. It must be a valid email address.
- `password`: A string with a minimum length of 6 characters.

### Example Response
- `user` (object):
    - `fullName` (object):
        - `firstName` (string): The first name of the user.
        - `lastName` (string): The last name of the user.
    - `email` (string): The email address of the user.
    - `password` (string): The hashed password of the user.
- `token` (string): The JSON Web Token (JWT) that must be included in the `Authorization` header of all subsequent requests to authenticate the user.

## `/users/profile` Endpoint

### Description

This endpoint is used to retrieve the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Endpoint

`/users/profile`

### Request Headers

- `Authorization` (string, required): The JSON Web Token (JWT) obtained during the login process.
`Authonrization: Bearer <token>`

### Example Response

- `user` (object):
    - `fullName` (object):
        - `firstName` (string): The first name of the user.
        - `lastName` (string): The last name of the user.
    - `email` (string): The email address of the user.

## `/users/logout` Endpoint

### Description

This endpoint is used to log out the currently authenticated user by invalidating the JSON Web Token (JWT).

### HTTP Method

`GET`

### Endpoint

`/users/logout`

### Request Headers

- `Authorization` (string, required): The JSON Web Token (JWT) obtained during the login process.