import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;
const modelName = 'Response';
const collectionName = modelName.toLowerCase();

const ResponseSchema = new Schema(
  {
    title: { type: String, required: true, },
    etat: { type: Boolean, required: true},
    question: { type: Schema.Types.ObjectId, ref: "Question"},
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

ResponseSchema.plugin(mongoosePaginate);
export default mongoose.model(modelName, ResponseSchema, collectionName);