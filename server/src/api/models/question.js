import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const modelName = 'Question';
const collectionName = modelName.toLowerCase();

const QuestionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, },
    description: { type: String, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

QuestionSchema.plugin(mongoosePaginate);
export default mongoose.model(modelName, QuestionSchema, collectionName);
