import { Router } from 'express';
import { createSpeaker, getAllSpeakers, getSpeakerById, updateSpeaker, deleteSpeaker } from '../controller/speaker.controller.js';
// Import your new security middlewares
import { authMiddleware, adminMiddleware } from '../../../middleware/auth.js';
const router = Router();
// ==========================================
// PUBLIC ROUTES (No middleware required) [cite: 171-173]
// ==========================================
router.get("/speakers", getAllSpeakers);
router.get("/speakers/:id", getSpeakerById);
// ==========================================
// ADMIN ROUTES (Protected by middlewares) 
// ==========================================
// Notice how the middlewares are placed BEFORE the controller function
router.post("/admin/speakers", authMiddleware, adminMiddleware, createSpeaker);
router.patch("/admin/speakers/:id", authMiddleware, adminMiddleware, updateSpeaker);
router.delete("/admin/speakers/:id", authMiddleware, adminMiddleware, deleteSpeaker);
export default router;
//# sourceMappingURL=speaker.router.js.map