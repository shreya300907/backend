import { SpeakerRepository } from '../repository/speaker.repository.js';
import type { ISpeaker } from '../interface/index.js';

export const SpeakerService = {
  createSpeaker: async (data: ISpeaker) => {
    return await SpeakerRepository.createSpeaker(data);
  },

  getAllPublishedSpeakers: async () => {
    return await SpeakerRepository.getAllPublishedSpeakers();
  },

  getSpeakerById: async (id: string, isPublicRequest: boolean = false) => {
    const speaker = await SpeakerRepository.getSpeakerById(id);
    
    if (!speaker) {
      throw new Error("Speaker not found");
    }

    if (isPublicRequest && !speaker.isPublished) {
      throw new Error("Speaker not found"); 
    }

    return speaker;
  },

  updateSpeaker: async (id: string, data: Partial<ISpeaker>) => {

    const existingSpeaker = await SpeakerRepository.getSpeakerById(id);
    if (!existingSpeaker) {
      throw new Error("Speaker not found");
    }

    return await SpeakerRepository.updateSpeaker(id, data);
  },

  deleteSpeaker: async (id: string) => {
    
    const existingSpeaker = await SpeakerRepository.getSpeakerById(id);
    if (!existingSpeaker) {
      throw new Error("Speaker not found");
    }

    await SpeakerRepository.deleteSpeaker(id);
    return true;
  }
};