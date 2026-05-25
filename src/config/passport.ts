import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { getAdminModel } from '../feature/Auth/model/admin.model.js';

const Admin = getAdminModel();

// check email and password
passport.use(
  new LocalStrategy(
    { usernameField: 'email' }, // checks email for username
    async (email, password, done) => {
      try {
        const user = await Admin.findOne({ email });
        
        if (!user) {
          return done(null, false, { message: 'Invalid email / password' });
        }

        // compare the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: 'Invalid email / password' });
        }

       
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

//extracts user from db and created id in cookie
passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

// revrese of previous step
passport.deserializeUser(async (id, done) => {
  try {

    const user = await Admin.findById(id).select('-password');
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;