import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 30 },
  fileUrl: { type: String, required: true },
  description: { type: String, required: true, trim: true, maxLength: 120 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

// Middleware 는 model 만들기 전에 선언해야함
// videoSchema.pre("save", async function () {
//   console.log(this.hashtags);
//   this.hashtags = this.hashtags[0]
//     .split(",")
//     .map(word => (word.startsWith("#") ? word : `#${word}`));
// });

const Video = mongoose.model("Video", videoSchema);

export default Video;
