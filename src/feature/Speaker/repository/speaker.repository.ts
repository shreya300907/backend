import { getSpeakerModel } from '../model/speaker.model.js';
import type { ISpeaker } from '../interface/index.js';

const Speaker = getSpeakerModel();

export const SpeakerRepository = {
  createSpeaker: async (data: ISpeaker) => {
    return await Speaker.create(data);
  },
  
  
  getAllPublishedSpeakers: async () => {
    return await Speaker.find({ isPublished: true }).sort({ createdAt: -1 });
  },
  
  getSpeakerById: async (id: string) => {
    return await Speaker.findById(id);
  },
  
  updateSpeaker: async (id: string, data: Partial<ISpeaker>) => {
    return await Speaker.findByIdAndUpdate(id, data, { new: true });
  },
  
  deleteSpeaker: async (id: string) => {
    return await Speaker.findByIdAndDelete(id);
  }
};