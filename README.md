## Live Link: https://appliance-repair-frontend.vercel.app
## Server Link: https://appliance-repair-backend.vercel.app/api/v1/

# Appliance Repair Service Website

Welcome to the Appliance Repair Service Website! This web application provides a platform for appliance repair services with different user roles: `super_admin`, `admin`, and `user`. Our website is built using modern technologies and aims to simplify the process of managing appliance repair services and scheduling appointments.

Admin Credential
    admin email: admin1@gmail.com
    password:123456



## Features

- **User Roles:**
  - **Super Admin:** Has full control over the website, including user and appliance service management.
  - **Admin:** Manages appliance services, users, and appointments.
  - **User:** Can request appliance repair services, view appointments, and manage their profile.

- **Appliance Categories:** We offer repair services for a wide range of appliances, including:
  - Kitchen Hood Services
  - Oven Services
  - TV Services
  - IPS Services
  - Washing Machine Services
  - Generator Services
  - Water Purifier Services
  - Refrigerator Services

- **JWT Authentication:** We use JSON Web Tokens (JWT) to ensure secure user authentication and authorization.

- **Technologies Used:**
  - Next.js
  - TypeScript
  - Prisma
  - PostgreSQL
  - Ant Design
  - Tailwind CSS
  - Zod (for data validation)
  - React Hook Form (for form handling)

## Getting Started

To run this project on your local machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/nurmohammad83/appliance-repair-frontend
   ```

2. Install dependencies:
   ```
   cd appliance-repair-frontend
   npm install or yarn install
   ```

3. Set up your environment variables, including database connection details and JWT secret.

4. Run the development server:
   ```
   npm run dev
   or yarn run dev
   ```

5. Open your web browser and visit `http://localhost:3000` to access the website.

## Directory Structure

Here's an overview of the project's directory structure:

- `/components`: Contains React components used throughout the application.
- `/app`: Defines the website's routes and pages.
- `/assets`: Stores some image for website.
- `/helpers`: Some reuseable function.
- `/services`: For server site data fetching.
- `/app/lib`: Website main custom layout and auth options.

## Usage

- Super Admin: As a super admin, you have full control over the website. You can manage users, appliance services, and appointments.

- Admin: Admins can manage appliance services and appointments, including approving user requests for services.

- User: Users can browse available appliance services, request appointments, and view their upcoming and past appointments.


We hope you find our Appliance Repair Service Website helpful and user-friendly. Thank you for choosing us for your appliance repair needs!