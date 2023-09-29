import mongoose, { Document, Model, Schema } from 'mongoose';

// Interface to represent the user document
interface IUser extends Document {
    username: string;
    password: string; // Ideally, passwords should be hashed before storing
    firstName: string;
    lastName: string;
}

// Interface for the user model
interface IUserModel extends Model<IUser> {
    build(attr: IUserAttrs): IUser;
}

// Interface for user attributes
interface IUserAttrs {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    firstName: {
        type: String,
        maxlength: 20
    },
    lastName: {
        type: String,
        maxlength: 20
    }
});

// Static method to create a new user
userSchema.statics.build = (attr: IUserAttrs) => {
    return new User(attr);
};

const User: IUserModel = mongoose.model<IUser, IUserModel>('User', userSchema);

export { User };
