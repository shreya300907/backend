import { Types } from "mongoose";
export interface ISpeaker {
    _id?: Types.ObjectId;
    name: string;
    image: string;
    title: string;
    body: string;
    isPublished?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=index.d.ts.map