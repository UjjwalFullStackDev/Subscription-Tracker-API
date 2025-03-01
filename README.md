# Subscription Management System API

## Introduction
Build a production-ready Subscription Management System API that handles real users, real money, and real business logic.

Authenticate users using JWTs, connect a database, create models and schemas, and integrate it with ORMs. Structure the architecture of your API to ensure scalability and seamless communication with the frontend.

## Tech Stack
- Node.js
- Express.js
- MongoDB

## Features
- **Advanced Rate Limiting and Bot Protection**: Secure your app using Arcjet.
- **Database Modeling**: Models and relationships using MongoDB & Mongoose.
- **JWT Authentication**: User CRUD operations and subscription management.
- **Global Error Handling**: Input validation and middleware integration.
- **Logging Mechanisms**: For better debugging and monitoring.
- **Email Reminders**: Automating smart email reminders with workflows using Upstash.

...and many more, including code architecture and reusability.

## Quick Start
Follow these steps to set up the project locally on your machine.

### Prerequisites
Ensure you have the following installed:
- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository
```bash
git clone https://github.com/UjjwalFullStackDev/Subscription-Tracker-API.git
cd subscription-tracker
```

### Installation
Install the project dependencies:
```bash
npm install
```

### Set Up Environment Variables
Create a new file named `.env.local` in the root of your project and add the following content:
```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```

### Running the Project
```bash
npm run dev
```
Open `http://localhost:5500` in your browser or any HTTP client to test the project.

