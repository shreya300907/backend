import { SpeakerService } from '../service/speaker.service.js';
import { CreateSpeakerSchema, UpdateSpeakerSchema } from '../validator/speaker.validator.js';
export const createSpeaker = async (req, res) => {
    try {
        const validatedData = CreateSpeakerSchema.parse(req.body);
        const speaker = await SpeakerService.createSpeaker(validatedData);
        res.status(201).json({
            success: true,
            message: "Speaker created successfully",
            data: speaker
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
export const getAllSpeakers = async (req, res) => {
    try {
        const speakers = await SpeakerService.getAllPublishedSpeakers();
        res.status(200).json({ success: true, data: speakers });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};
export const getSpeakerById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id)
            throw new Error("Speaker ID is required");
        const isPublicRequest = !req.isAuthenticated || !req.isAuthenticated();
        const speaker = await SpeakerService.getSpeakerById(id, isPublicRequest);
        res.status(200).json({ success: true, data: speaker });
    }
    catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};
export const updateSpeaker = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id)
            throw new Error("Speaker ID is required");
        const validatedData = UpdateSpeakerSchema.parse(req.body);
        const speaker = await SpeakerService.updateSpeaker(id, validatedData);
        res.status(200).json({
            success: true,
            message: "Speaker updated successfully",
            data: speaker
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
export const deleteSpeaker = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id)
            throw new Error("Speaker ID is required");
        await SpeakerService.deleteSpeaker(id);
        res.status(200).json({ success: true, message: "Speaker deleted successfully" });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
//# sourceMappingURL=speaker.controller.js.map