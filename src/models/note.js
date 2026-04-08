
import { Schema } from 'mongoose';
import { model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      default: '',
      trim: true
    },
  },
  { timestamps: true }
);

export const Note = model('Note', noteSchema);
