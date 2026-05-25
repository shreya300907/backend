export const authMiddleware = (req, res, next) => {
    // passport.js automatically attaches the isAuthenticated() method to the request
    if (req.isAuthenticated && req.isAuthenticated()) {
        return next(); // Let them through
    }
    res.status(401).json({
        success: false,
        message: "Unauthorized: You must be logged in to access this."
    });
};
export const adminMiddleware = (req, res, next) => {
    // passport attaches the logged-in user to req.user
    const user = req.user;
    if (user && user.role === 'admin') {
        return next(); // admin can access
    }
    res.status(403).json({
        success: false,
        message: "Forbidden: You do not have admin access."
    });
};
//# sourceMappingURL=auth.js.map