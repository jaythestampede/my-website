const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.Objectid,
        ref: 'user'
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String], // String Array
        required: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: [
        {
            title: { 
                type: String,
                required: true
            },
            company: { 
                type: String,
                required: true
            },
            location: { 
                type: String,
                required: true
            },
            from: { 
                type: String,
                required: true
            },
            to: { 
                type: Date,
            },
            current: { 
                type: Boolean,
                default: false
            },
            description: { 
                type: String,
            },
        }
    ],
    education: [
        {
            school: { 
                type: String,
                required: true
            },
            degree: { 
                type: String,
                required: true
            },
            fieldofstudy: { 
                type: String,
                required: true
            },
            from: { 
                type: Date,
                required: true
            },
            to: { 
                type: Date,
            },
            current: { 
                type: Boolean,
                default: false
            },
            description: { 
                type: String,
            },
        }
    ],
    social: {
        youtube:{
            type: string
        },
        twitter:{
            type: string
        },
        facebook:{
            type: string
        },
        linkedin:{
            type: string
        },
        instagram:{
            type: string
        },
    }
});