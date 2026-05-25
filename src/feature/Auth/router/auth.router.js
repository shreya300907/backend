import { Router } from 'express';
import { loginAdmin, logoutAdmin } from '../controller/auth.controller.js';
import passport from 'passport';
const router = Router();
router.post("/login", passport.authenticate('local'), loginAdmin);
router.post("/logout", logoutAdmin);
export default router;
//# sourceMappingURL=auth.router.js.map