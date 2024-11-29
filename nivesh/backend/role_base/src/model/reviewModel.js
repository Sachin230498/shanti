import mongoose  from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true }, // Reference to Post
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);
