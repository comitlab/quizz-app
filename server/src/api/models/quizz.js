import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const modelName = 'Quizz';
const collectionName = modelName.toLowerCase();

const QuizzSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, },
    questions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question"
    }]
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

QuizzSchema.plugin(mongoosePaginate);
export default mongoose.model(modelName, QuizzSchema, collectionName);

