import mongoose  from 'mongoose';
import bcrypt  from 'bcrypt-nodejs';
import validator  from 'validator';
import mongoosePaginate  from 'mongoose-paginate-v2';

const modelName = 'User';
const collectionName = modelName.toLowerCase();

const UserSchema = new mongoose.Schema(
  {
    firstName: {type: String, required: true, minLength: 3, maxLength: 30},
    lastName: {type: String, required: true, minLength: 2, maxLength: 30},
    email: {type: String, validate: {
        validator: validator.isEmail, message: 'EMAIL_IS_NOT_VALID',
      }, unique: true, required: true,
    },
    password: {type: String, required: true, select: false,},
    role: {type: String, enum: ['user', 'admin'], default: 'user',},
    verification: {type: String,},
    verified: {type: Boolean, default: false,},
    phone: {type: Number, required: true,},
    city: {type: String, required: true},
    country: {type: String, required: true},
    homeInstitution: {type: String, required: true},
    pathway: {type: String, required: true},
    average: {type: Number, required: true},
    loginAttempts: {type: Number, default: 0, select: false},
    blockExpires: {type: Date, default: Date.now, select: false},
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
const hash = (user, salt, next) => {
  bcrypt.hash(user.password, salt, null, (error, newHash) => {
    if (error) {
      return next(error);
    }
    user.password = newHash;
    
return next();
  });
};

const genSalt = (user, SALT_FACTOR, next) => {
  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) {
      return next(err);
    }
    
return hash(user, salt, next);
  });
};

UserSchema.pre('save', function(next) {
  const that = this;
  const SALT_FACTOR = 5;

  if (!that.isModified('password')) {
    return next();
  }
  
return genSalt(that, SALT_FACTOR, next);
});

UserSchema.methods.comparePassword = function(passwordAttempt, cb) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) =>
    err ? cb(err) : cb(null, isMatch),
  );
};
UserSchema.plugin(mongoosePaginate);
export default mongoose.model(modelName, UserSchema, collectionName);
