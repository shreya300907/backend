import { z } from "zod";
export declare const CreateSpeakerSchema: z.ZodObject<{
    name: z.ZodString;
    image: z.ZodString;
    title: z.ZodString;
    body: z.ZodString;
    isPublished: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const UpdateSpeakerSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    body: z.ZodOptional<z.ZodString>;
    isPublished: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
//# sourceMappingURL=speaker.validator.d.ts.map