import { Schema, model } from "mongoose";
import type { ISpeaker } from "../interface/index.js";

const SpeakerSchema = new Schema<ISpeaker>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const getSpeakerModel = () => model<ISpeaker>("Speaker", SpeakerSchema);