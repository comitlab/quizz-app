import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;
const modelName = 'Question';
const collectionName = modelName.toLowerCase();

const QuestionSchema = new Schema(
  {
    title: { type: String, required: true, },
    note: { type: Number, required: true},
    nameAttribute: { type: Number, required: true},
    quizz: { type: Schema.Types.ObjectId, ref: "Quizz"},
    Responses: [{ type: Schema.Types.ObjectId, ref: "Response" }],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

QuestionSchema.plugin(mongoosePaginate);
export default mongoose.model(modelName, QuestionSchema, collectionName);