Fullstack CRUD Application (React + Spring Boot + PostgreSQL)
📌 Overview

  This is a Fullstack CRUD (Create, Read, Update, Delete) application built with:
  
  Frontend: React (developed in VS Code)
  
  Backend: Spring Boot (developed in IntelliJ IDEA)
  
  Database: PostgreSQL
  
  It demonstrates how to build and connect a modern frontend with a backend API     and a relational database.


⚙️ Tech Stack

    Frontend: React, JavaScript, HTML, CSS
    
    Backend: Spring Boot, Java, Maven
    
    Database: PostgreSQL
    
    Tools: IntelliJ IDEA, VS Code, GitHub


✨ Features

    Add a new record (Create)
    
    View all records (Read)
    
    Edit/update a record (Update)
    
    Delete a record (Delete)
    
    API communication between React and Spring Boot
    
    PostgreSQL integration


🚀 Getting Started
🔹 Prerequisites

    Make sure you have installed:
    
    Node.js
    
    PostgreSQL
    
    Java JDK 17+
    
    Maven
    
    Git


🔹 Clone the Repository

git clone https://github.com/AmrishManickraj/fullstack-crud.git
cd fullstack-crud


🔹 Backend Setup (Spring Boot)

 1.Navigate to the backend folder:
   cd Backend
   
 2.Update application.properties with your PostgreSQL credentials:
   spring.datasource.url=jdbc:postgresql://localhost:5432/your_db
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update

 3.Run the backend:
   mvn spring-boot:run
   The backend will start on http://localhost:8080


🔹 Frontend Setup (React)

  1.Navigate to the frontend folder (root of project if React files are there):
    cd ..
  
  2.Install dependencies:
    npm install

  3.Start the React development server:
    npm start
    The frontend will run on http://localhost:3000


 📂 Project Structure
      react-project/
      │── Backend/                 # Spring Boot backend
      │   ├── src/main/java/...    # Java source code
      │   ├── src/main/resources/  # Application properties
      │   └── pom.xml              # Maven config
      │
      │── src/                     # React frontend source
      │── public/                  # React public assets
      │── package.json             # React dependencies
      │── README.md                # Project documentation


 📬 API Endpoints (Spring Boot)
      | Method | Endpoint              | Description       |
      | ------ | --------------------- | ----------------- |
      | GET    | `/api/countries`      | Get all records   |
      | POST   | `/api/countries`      | Create new record |
      | PUT    | `/api/countries/{id}` | Update a record   |
      | DELETE | `/api/countries/{id}` | Delete a record   |


  🌟 Future Improvements

      Add authentication (JWT)
      
      Dockerize the app
      
      Deploy to AWS / Heroku / Render


  👨‍💻 Author
     👤 Amrish Manickraj  
     📧 amrishmanickraj23@gmail.com
