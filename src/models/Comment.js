import moogose from "mongoose";

const commnetSchema = new moogose.Schema({
  text: { type: String, required: true },
  owner: { type: moogose.Schema.Types.ObjectId, required: true, ref: "User" },
  video: { type: moogose.Schema.Types.ObjectId, required: true, ref: "Video" },
  createdAt: { type: Date, required: true, default: Date.now },
});

const Comment = moogose.model("Comment", commnetSchema);

export default Comment;
