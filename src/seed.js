import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { getAdminModel } from './feature/Auth/model/admin.model.js';
// loading env
dotenv.config();
const Admin = getAdminModel();
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    console.error("FATAL ERROR: MONGO_URI is not defined in the environment.");
    process.exit(1);
}
// admin creds
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const seedAdmin = async () => {
    // ensures creds of admin in env file
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
        console.error('Error: ADMIN_EMAIL and ADMIN_PASSWORD must be defined in your .env file.');
        process.exit(1);
    }
    try {
        console.log('Connecting to DB');
        await mongoose.connect(MONGO_URI);
        console.log('Connected!');
        // checks if this admin already exists
        const existingAdmin = await Admin.findOne({ email: ADMIN_EMAIL });
        if (existingAdmin) {
            console.log(`Admin user (${ADMIN_EMAIL}) already exists. Skipping seed.`);
            process.exit(0);
        }
        // hash the password 
        console.log('Hashing password...');
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, saltRounds);
        //create the admin user
        console.log(`Creating admin user: ${ADMIN_EMAIL}...`);
        await Admin.create({
            email: ADMIN_EMAIL,
            password: hashedPassword,
            role: 'admin'
        });
        console.log('Success! Admin user created securely from environment variables.');
        process.exit(0);
    }
    catch (error) {
        console.error('Failed to seed DB:', error);
        process.exit(1);
    }
};
seedAdmin();
//# sourceMappingURL=seed.js.map