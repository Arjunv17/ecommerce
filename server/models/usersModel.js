const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name: {
        type: String, index: true, default: '',required:true
    },
    email: {
        type: String, index: true, default: '',required:true
    },
    password: {
        type: String ,required:true
    },
    phoneNumber: {
        type: String, index: true, default: '',required:true
    },
    gender: {
        type: String, enum:['male','femail','other'], required:true
    },
    profilePic: {
        type: String, required:true
    },
    otpCode: {
        type: String, required:true
    },
    isDeleted: {
        type: Boolean, index: true, default: 'false'
    },
    isVerified: {
        type: Boolean, index: true, default: 'false'
    }
},
{
    timestamps:true
}
);

userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(this.password, salt)
        this.password = hashpass
        next()
    } catch (error) {
        next(error)
    }
});


const Users = module.exports = mongoose.model('users', userSchema)
module.exports = Users;