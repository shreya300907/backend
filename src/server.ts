import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import dotenv from 'dotenv';
import cors from "cors";
// load env
dotenv.config();


import passport from './config/passport.js';
import speakerRouter from './feature/Speaker/router/speaker.router.js';
import authRouter from './feature/Auth/router/auth.router.js';

const app = express();

// Define which frontends are allowed to talk to this backend
const allowedOrigins = [
  'http://localhost:3000',                  // Your local Next.js development server
  'https://your-deployed-app.vercel.app'    // (Optional) Your production frontend URL 
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like Postman, mobile apps, or server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Blocked by CORS policy'));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true // Now this safely works alongside explicit origins!
  })
);

// env 
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const SESSION_SECRET = process.env.SESSION_SECRET;

if (!MONGO_URI) {
  console.error("FATAL ERROR: MONGO_URI is not defined in the environment.");
  process.exit(1);
}

if (!SESSION_SECRET) {
  console.error("FATAL ERROR: SESSION_SECRET is not defined in the environment.");
  process.exit(1);
}

//middleware
app.use(express.json());


app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      path: '/'
    }
  })
);

// innitiate passport
app.use(passport.initialize());
app.use(passport.session());


app.use('/api/admin/auth', authRouter);


app.use('/api/v1', speakerRouter);

// global error handeling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});


const bootstrap = async () => {
  try {
    // db connection
    await mongoose.connect(MONGO_URI);
    console.log('Database connection established successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running live on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

bootstrap();