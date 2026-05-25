import mongoose, { Document } from 'mongoose';
const adminSchema = new mongoose.Schema({
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
}, { timestamps: true });
export const getAdminModel = () => {
    return mongoose.models.Admin || mongoose.model('Admin', adminSchema);
};
//# sourceMappingURL=admin.model.js.map