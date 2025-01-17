# Backend API Documentation

## User Endpoints

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

## Captain Endpoints

## `/captains/register` Endpoint

### Description

Registers a new captain by creating a captain account in the database with the provided information.

### HTTP Method

`POST`

### Request Body

The request body must be a JSON object with the following properties:

- `fullName` (object):
    -`firstname` (string, required): Captain's first name (minimum 3 characters)
    - `lastname` (string, optional): Captain's last name
- `email` (string, required): Captain's email address (must be a valid email)
- `password` (string, required): Captain's password (minimum 6 characters)
- `vehicle` (object):
  - `color` (string, required): Vehicle color (minimum 3 characters)
  - `plateNumber` (string, required): Vehicle plate number (minimum 3 characters)
  - `capacity` (number, required): Vehicle passenger capacity (minimum 1)
  - `vehicleType` (string, required): Type of vehicle (must be 'car', 'motorcycle', or 'auto rickshaw')

`
### Example Response

- `captain` (object):
    - `fullName` (object):
        - `firstName` (string): The first name of the captain.
        - `lastName` (string): The last name of the captain.
    - `email` (string): The email address of the captain.
    - `password` (string): The hashed password of the captain.
    - `vehicle` (object):
        - `color` (string): The color of the vehicle.
        - `plateNumber` (string): The plate number of the vehicle.
        - `capacity` (number): The passenger capacity of the vehicle.
        - `vehicleType` (string): The type of vehicle.
- `token` (string): The JSON Web Token (JWT) that must be included in the `Authorization` header of all subsequent requests to authenticate the captain.

## `/captains/login` Endpoint

### Description

This endpoint is used to log in an existing captain. It validates the input data and checks the credentials against the database.

### HTTP Method

`POST`

### Endpoint

`/captains/login`

### Request Body

The request body should be a JSON object with the following fields:

- `email`: A string representing the captain's email. It must be a valid email address.
- `password`: A string with a minimum length of 6 characters.

### Example Response

- `captain` (object):
    - `fullName` (object):
        - `firstName` (string): The first name of the captain.
        - `lastName` (string): The last name of the captain.
    - `email` (string): The email address of the captain.
    - `password` (string): The hashed password of the captain.
    - `vehicle` (object):
        - `color` (string): The color of the vehicle.
        - `plateNumber` (string): The plate number of the vehicle.
        - `capacity` (number): The passenger capacity of the vehicle.
        - `vehicleType` (string): The type of vehicle.
    - `status` (string): The status of the captain.
- `token` (string): The JSON Web Token (JWT) that must be included in the `Authorization` header of all subsequent requests to authenticate the captain.

## `/captains/profile` Endpoint

### Description

This endpoint is used to retrieve the profile information of the currently authenticated captain.

### HTTP Method

`GET`

### Endpoint

`/captains/profile`

### Request Headers

- `Authorization` (string, required): The JSON Web Token (JWT) obtained during the login process.
`Authonrization bearer <token>`

### Example Response

- `captain` (object):
    - `fullName` (object):
        - `firstName` (string): The first name of the captain.
        - `lastName` (string): The last name of the captain.
    - `email` (string): The email address of the captain.
    - `vehicle` (object):
        - `color` (string): The color of the vehicle.
        - `plateNumber` (string): The plate number of the vehicle.
        - `capacity` (number): The passenger capacity of the vehicle.
        - `vehicleType` (string): The type of vehicle.
    - `status` (string): The status of the captain.
    

## `/captains/logout` Endpoint

### Description

This endpoint is used to log out the currently authenticated captain by invalidating the JSON Web Token (JWT).

### HTTP Method

`GET`

### Endpoint

`/captains/logout`

### Request Headers

- `Authorization` (string, required): The JSON Web Token (JWT) obtained during the login process.
