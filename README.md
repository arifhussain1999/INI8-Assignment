# Registration System

This project is a simple Registration system with **CRUD** operations. The backend uses **Spring Boot** and **MySQL**, and the frontend uses **HTML, CSS, and JavaScript**.

## Prerequisites
- **Java 11+**
- **MySQL**
- **Maven**
- **Node.js** (optional for serving frontend)

## Setup Instructions

### Backend Setup
1. **Clone Repository**:

   git clone https://github.com/your-repo-url.git
   cd your-repo-directory
Database: Create a database in MySQL:

CREATE DATABASE registration;
Update application.properties with your database details.

Build and Run: 

mvn clean install
mvn spring-boot:run
Backend runs at http://localhost:8080.

Frontend Setup
Navigate to the frontend directory:
cd frontend
Serve Frontend:
Option 1: Use Live Server in VS Code.
Option 2: Run with Node.js:

npx http-server .
Frontend runs at http://localhost:5500.
API Endpoints
GET /registrations/get-list: Fetch all registrations.
POST /registrations/add: Add a new registration (JSON body).
PUT /registrations/update/{id}: Update a registration.
DELETE /registrations/delete/{id}: Delete a registration.
Example POST Request:
URL: http://localhost:8080/registrations/add
Body:
json

{
  "name": "John Doe",
  "email": "john@example.com",
  "dob": "1990-01-01"
}
CORS Issue Fix
To resolve CORS errors, update WebConfig in Spring Boot:

java

@Override
public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
            .allowedOrigins("http://localhost:5500")
            .allowedMethods("GET", "POST", "PUT", "DELETE");
}
Run the Project
Start the backend at http://localhost:8080.
Serve the frontend at http://localhost:5500.



