export const loginAdmin = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Admin logged in successfully",
            user: req.user
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Login failed" });
    }
};
export const logoutAdmin = (req, res) => {
    req.logout((err) => {
        if (err)
            return res.status(500).json({ success: false, message: "Error logging out" });
        res.status(200).json({ success: true, message: "Logged out successfully" });
    });
};
//# sourceMappingURL=auth.controller.js.map