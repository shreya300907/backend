import type { Request, Response } from 'express';
import { SpeakerService } from '../service/speaker.service.js';
import { CreateSpeakerSchema, UpdateSpeakerSchema } from '../validator/speaker.validator.js';
import type { ISpeaker } from '../interface/index.js'; 

export const createSpeaker = async (req: Request, res: Response) => {
  try {
    const validatedData = CreateSpeakerSchema.parse(req.body);

    const speaker = await SpeakerService.createSpeaker(validatedData as ISpeaker);
    
    res.status(201).json({
      success: true,
      message: "Speaker created successfully",
      data: speaker
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllSpeakers = async (req: Request, res: Response) => {
  try {
    const speakers = await SpeakerService.getAllPublishedSpeakers();
    res.status(200).json({ success: true, data: speakers });
  } catch (error: any) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getSpeakerById = async (req: Request, res: Response) => {
  try {
   
    const id = req.params.id as string;
    if (!id) throw new Error("Speaker ID is required");

    const isPublicRequest = !(req as any).isAuthenticated || !(req as any).isAuthenticated(); 
    
    const speaker = await SpeakerService.getSpeakerById(id, isPublicRequest);
    res.status(200).json({ success: true, data: speaker });
  } catch (error: any) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const updateSpeaker = async (req: Request, res: Response) => {
  try {
    
    const id = req.params.id as string;
    if (!id) throw new Error("Speaker ID is required");

    const validatedData = UpdateSpeakerSchema.parse(req.body);
    const speaker = await SpeakerService.updateSpeaker(id, validatedData as Partial<ISpeaker>);
    
    res.status(200).json({
      success: true,
      message: "Speaker updated successfully",
      data: speaker
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteSpeaker = async (req: Request, res: Response) => {
  try {
    
    const id = req.params.id as string;
    if (!id) throw new Error("Speaker ID is required");

    await SpeakerService.deleteSpeaker(id);
    res.status(200).json({ success: true, message: "Speaker deleted successfully" });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};