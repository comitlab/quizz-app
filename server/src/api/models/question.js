import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;
const modelName = 'Question';
const collectionName = modelName.toLowerCase();

const QuestionSchema = new Schema(
  {
    title: { type: String, required: true, },
    description: { type: String, required: true},
    quizz: { type: Schema.Types.ObjectId, ref: "Quizz"},
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

QuestionSchema.plugin(mongoosePaginate);
export default mongoose.model(modelName, QuestionSchema, collectionName);
