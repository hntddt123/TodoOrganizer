import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre(
  'save',
  async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
  }
);

UserSchema.methods.isValidPassword = async function(password) {
  const compare = await bcrypt.compare(password, this.password);

  return compare;
}

export const User = mongoose.model('user', UserSchema);
