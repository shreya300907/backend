Clone the repository and install the required packages:
npm install

Create a .env file in the root directory.
PORT=5000
MONGO_URI=
SESSION_SECRET=your_super_secret_session_key
NODE_ENV=development

# Admin Credentials for Database Seeding
ADMIN_EMAIL=admin@tedx.com
ADMIN_PASSWORD=your_secure_password

Before accessing the admin routes, you need an initial admin account. Run the seed script to securely generate one using the credentials from your .env file:
npx tsx src/seed.ts

Start the development server with live-reloading:
npm run dev

Public Routes
GET /api/v1/speakers 
GET /api/v1/speakers/:id

Admin Routes (require access)

POST /api/admin/auth/login 
POST /api/admin/auth/logout
POST /api/v1/admin/speakers
PATCH /api/v1/admin/speakers/:id 
DELETE /api/v1/admin/speakers/:id
