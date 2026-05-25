import { Schema, model } from "mongoose";
const SpeakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    body: {
        type: String,
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
export const getSpeakerModel = () => model("Speaker", SpeakerSchema);
//# sourceMappingURL=speaker.model.js.map