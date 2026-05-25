import type { ISpeaker } from '../interface/index.js';
export declare const SpeakerService: {
    createSpeaker: (data: ISpeaker) => Promise<import("mongoose").Document<unknown, {}, ISpeaker, {}, import("mongoose").DefaultSchemaOptions> & ISpeaker & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllPublishedSpeakers: () => Promise<(import("mongoose").Document<unknown, {}, ISpeaker, {}, import("mongoose").DefaultSchemaOptions> & ISpeaker & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getSpeakerById: (id: string, isPublicRequest?: boolean) => Promise<import("mongoose").Document<unknown, {}, ISpeaker, {}, import("mongoose").DefaultSchemaOptions> & ISpeaker & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    updateSpeaker: (id: string, data: Partial<ISpeaker>) => Promise<(import("mongoose").Document<unknown, {}, ISpeaker, {}, import("mongoose").DefaultSchemaOptions> & ISpeaker & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteSpeaker: (id: string) => Promise<boolean>;
};
//# sourceMappingURL=speaker.service.d.ts.map