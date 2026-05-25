import { z } from "zod";

export const CreateSpeakerSchema = z.object({
  name: z.string().min(2),
  image: z.string().url(),
  title: z.string().min(3),
  body: z.string().min(20),
  isPublished: z.boolean().optional(),
});

// partial() makes all fields optional for the PATCH/update route
export const UpdateSpeakerSchema = CreateSpeakerSchema.partial();