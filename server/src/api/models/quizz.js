import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;
const modelName = 'Quizz';
const collectionName = modelName.toLowerCase();

const QuizzSchema = new Schema(
  {
    name: { type: String, required: true, },
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

QuizzSchema.plugin(mongoosePaginate);
export default mongoose.model(modelName, QuizzSchema, collectionName);

