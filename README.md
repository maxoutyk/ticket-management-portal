# Ticket Management Portal

A modern ticket management system built with Next.js, PostgreSQL, and NextAuth.js for authentication.

## Features

- User authentication (login, register)
- User roles (Admin, User)
- Ticket management
- Modern and responsive UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://your-repository-url/ticket-management-portal.git
   cd ticket-management-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables by creating a `.env.local` file in the root directory:
   ```
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/ticket-management-portal"
   
   # Next Auth
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Set up the database:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

Make sure you have a PostgreSQL server running. Create a database for this project:

```sql
CREATE DATABASE "ticket-management-portal";
```

Then update the `.env.local` file with your database credentials.

## Deployment

This project can be easily deployed to Vercel:

```bash
npm install -g vercel
vercel
```

## License

MIT
