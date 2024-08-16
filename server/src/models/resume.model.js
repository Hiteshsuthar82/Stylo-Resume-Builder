import mongoose, { Schema } from 'mongoose';

// Defining the Project Schema
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    technologies: {
        type: String
    },
    duration: {
        type: String
    },
    description: [
        {
            type: String
        }
    ]
}, { _id: false });

// Defining the Skills Schema
const skillSchema = new mongoose.Schema({
    languages: {
        type: String
    },
    frameworks: {
        type: String
    },
    developerTools: {
        type: String
    },
    libraries: {
        type: String
    }
}, { _id: false });

// Defining the Education Schema
const educationSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    duration: {
        type: String
    }
}, { _id: false });

// Defining the Experience Schema
const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    duration: {
        type: String
    },
    responsibilities: [
        {
            type: String
        }
    ]
}, { _id: false });

// Defining the Resume Schema that includes all the above schemas
const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    image: {
        type: String // cloudinary url
    },
    contact: {
        phone: {
            type: String
        },
        email: {
            type: String
        },
        linkedin: {
            type: String
        },
        github: {
            type: String
        }
    },
    education: [educationSchema],
    experience: [experienceSchema],
    projects: [projectSchema],
    skills: skillSchema,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const Resume = mongoose.model('Resume', resumeSchema);