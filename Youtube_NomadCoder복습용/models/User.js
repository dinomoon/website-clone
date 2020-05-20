import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
});

//usernameField 이해X 찾아보기
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const User = mongoose.model("User", UserSchema);
export default User;
