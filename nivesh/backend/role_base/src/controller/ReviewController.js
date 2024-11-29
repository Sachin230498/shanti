// Add Review to a Post (Requires Login)
import Review from "../model/reviewModel.js";

const PostReview =  async (req, res) => {
  try {
    const { content } = req.body;
    const review = new Review({
      content,
      user: req.user._id,
      post: req.params.postId,
    });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Reviews for a Post
const GetReview = async (req, res) => {
  const reviews = await Review.find({ post: req.params.postId }).populate(
    "user",
    "username"
  );
  res.json(reviews);
};

export {PostReview,GetReview}
