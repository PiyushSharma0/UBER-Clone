const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullName:{
        firstName: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },
        lastName: {
            type: String,
            required: true,
            minlength: [3, 'Last name must be at least 3 characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [6, 'Email must be at least 6 characters long'],
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: [6, 'Password must be at least 6 characters long']
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['available', 'unavailable'],
        default: 'unavailable'
    },
    vehicle: {
        color:{
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long']
        },
        plateNumber:{
            type: String,
            required: true,
            minlength: [3, 'Plate number must be at least 3 characters long']
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1']
        },
        vehicleType:{
            type: String,
            enum: ['car', 'motorcycle', 'auto rickshaw'],
            required: true
        }
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;