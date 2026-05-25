import type { ISpeaker } from '../interface/index.js';
export declare const SpeakerRepository: {
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
    getSpeakerById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, ISpeaker, {}, import("mongoose").DefaultSchemaOptions> & ISpeaker & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateSpeaker: (id: string, data: Partial<ISpeaker>) => Promise<(import("mongoose").Document<unknown, {}, ISpeaker, {}, import("mongoose").DefaultSchemaOptions> & ISpeaker & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteSpeaker: (id: string) => Promise<(import("mongoose").Document<unknown, {}, ISpeaker, {}, import("mongoose").DefaultSchemaOptions> & ISpeaker & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=speaker.repository.d.ts.map