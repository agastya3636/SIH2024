import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const alumniSchema = new mongoose.Schema({
   name: {
    type: String,
    required: [true, "Fullname is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  batch: {
    type: String,
  },
  role: {
    type: String,
    enum: ["alumni", "student", "college"],
    default: "alumni",
  },
  image: {
    type: String,
    required: [true, "Image URL is required"],
  },
  education: {
    type: String,
    required: [true, "Education is required"],
  },
  skills: {
    type: [String], // Array of strings to store multiple skills
  },
  interests: {
    type: [String], // Array of strings to store multiple interests
  },
  bio: {
    type: String,
  },
  socialLinks: {
    linkedin: {
      type: String,
      trim: true,
    },
    github: {
      type: String,
      trim: true,
    },
    twitter: {
      type: String,
      trim: true,
    },
  },
  customSkill: {
    type: String,
  },
  customInterest: {
    type: String,
  },
  college: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    ref: "College",
  },
 department: {
      type:String,
      required: [true, "Department is required"],
    }}, { 
      timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

alumniSchema.pre("save", async function(next) {
    const alumni = this;
    if (!alumni.isModified("password")) {
        return next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(alumni.password, saltRound);
        alumni.password = hashPassword;
        next();
    } catch (error) {
        next(error);
    }
});

alumniSchema.methods.verifyPassword=async function (password) {
    
    const isMatch = await bcrypt.compare(password,this.password);
    return isMatch; 
}
alumniSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            name: this.name,

        }, process.env.JWT_SECRET_KEY, {
            expiresIn: "30d"
        });
    } catch (error) {
        console.error(error);
    }
};

export const Alumni = mongoose.model("Alumni", alumniSchema);