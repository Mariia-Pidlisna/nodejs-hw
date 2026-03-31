
import { Schema } from 'mongoose';
import { model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tag : {
      type: String,
      required: false,
      enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'],
      default: 'Todo',
    }
  },
  { timestamps: true }
);

export default noteSchema;
export const Note = model('Note', noteSchema);
