import mongoose, { Document } from 'mongoose';

export interface IAdmin extends Document {
  email: string;
  password: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const adminSchema = new mongoose.Schema(
  {
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      trim: true, 
      lowercase: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    role: { 
      type: String, 
      default: 'admin' 
    }
  },
  { timestamps: true }
);

export const getAdminModel = () => {
  return (mongoose.models.Admin as mongoose.Model<IAdmin>) || mongoose.model<IAdmin>('Admin', adminSchema);
};