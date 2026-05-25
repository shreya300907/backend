import type { ISpeaker } from "../interface/index.js";
export declare const getSpeakerModel: () => import("mongoose").Model<ISpeaker, {}, {}, {}, import("mongoose").Document<unknown, {}, ISpeaker, {}, import("mongoose").DefaultSchemaOptions> & ISpeaker & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ISpeaker>;
//# sourceMappingURL=speaker.model.d.ts.map