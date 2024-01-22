import mongoose from 'mongoose';

const postModel = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String },
    post: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || mongoose.model('Post', postModel);
