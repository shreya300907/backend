import { getSpeakerModel } from '../model/speaker.model.js';
const Speaker = getSpeakerModel();
export const SpeakerRepository = {
    createSpeaker: async (data) => {
        return await Speaker.create(data);
    },
    getAllPublishedSpeakers: async () => {
        return await Speaker.find({ isPublished: true }).sort({ createdAt: -1 });
    },
    getSpeakerById: async (id) => {
        return await Speaker.findById(id);
    },
    updateSpeaker: async (id, data) => {
        return await Speaker.findByIdAndUpdate(id, data, { new: true });
    },
    deleteSpeaker: async (id) => {
        return await Speaker.findByIdAndDelete(id);
    }
};
//# sourceMappingURL=speaker.repository.js.map