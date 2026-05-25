import type { Request, Response } from 'express';

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: "Admin logged in successfully",
      user: (req as any).user
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: "Login failed" });
  }
};

export const logoutAdmin = (req: Request, res: Response) => {
  (req as any).logout((err: any) => {
    if (err) return res.status(500).json({ success: false, message: "Error logging out" });
    res.status(200).json({ success: true, message: "Logged out successfully" });
  });
};