import { SpeakerRepository } from '../repository/speaker.repository.js';
export const SpeakerService = {
    createSpeaker: async (data) => {
        return await SpeakerRepository.createSpeaker(data);
    },
    getAllPublishedSpeakers: async () => {
        return await SpeakerRepository.getAllPublishedSpeakers();
    },
    getSpeakerById: async (id, isPublicRequest = false) => {
        const speaker = await SpeakerRepository.getSpeakerById(id);
        if (!speaker) {
            throw new Error("Speaker not found");
        }
        if (isPublicRequest && !speaker.isPublished) {
            throw new Error("Speaker not found");
        }
        return speaker;
    },
    updateSpeaker: async (id, data) => {
        const existingSpeaker = await SpeakerRepository.getSpeakerById(id);
        if (!existingSpeaker) {
            throw new Error("Speaker not found");
        }
        return await SpeakerRepository.updateSpeaker(id, data);
    },
    deleteSpeaker: async (id) => {
        const existingSpeaker = await SpeakerRepository.getSpeakerById(id);
        if (!existingSpeaker) {
            throw new Error("Speaker not found");
        }
        await SpeakerRepository.deleteSpeaker(id);
        return true;
    }
};
//# sourceMappingURL=speaker.service.js.map