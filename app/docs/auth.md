# Authentication Workflow

This document outlines the authentication workflow for the application using JWT (JSON Web Tokens) with Supabase.

## Overview

The application supports user authentication through registration and login processes. Upon successful authentication, users receive a JWT that can be used for subsequent requests to protected routes.

## Authentication Endpoints

### 1. Register

- **Endpoint**: `/api/auth/register`
- **Method**: `POST`
- **Request Body**:
  - `email`: User's email address
  - `password`: User's password

- **Response**:
  - On success: Returns an access token.
  - On failure: Returns an error message.

### 2. Login

- **Endpoint**: `/api/auth/login`
- **Method**: `POST`
- **Request Body**:
  - `email`: User's email address
  - `password`: User's password

- **Response**:
  - On success: Returns an access token.
  - On failure: Returns an error message.

## Workflow

1. **User Registration**:
   - The user submits their email and password to the `/api/auth/register` endpoint.
   - If the registration is successful, the server responds with a JWT.

2. **User Login**:
   - The user submits their email and password to the `/api/auth/login` endpoint.
   - If the login is successful, the server responds with a JWT.

3. **Using the JWT**:
   - The JWT can be included in the `Authorization` header of subsequent requests to access protected resources.
   - Example: `Authorization: Bearer <access_token>`

4. **Token Expiration**:
   - The JWT may have an expiration time. Users may need to re-authenticate after the token expires.

## Conclusion

This authentication workflow provides a secure method for users to register and log in to the application, utilizing JWT for session management.
