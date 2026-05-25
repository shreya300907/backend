import type { Request, Response, NextFunction } from 'express';


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // passport.js automatically attaches the isAuthenticated() method to the request
  if ((req as any).isAuthenticated && (req as any).isAuthenticated()) {
    return next(); // Let them through
  }
  
  res.status(401).json({ 
    success: false, 
    message: "Unauthorized: You must be logged in to access this." 
  });
};


export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // passport attaches the logged-in user to req.user
  const user = (req as any).user;
  
 
  if (user && user.role === 'admin') {
    return next(); // admin can access
  }

  res.status(403).json({ 
    success: false, 
    message: "Forbidden: You do not have admin access." 
  });
};