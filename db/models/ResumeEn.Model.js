'use strict';

const mongoose = require('mongoose');

const ResumeEn = new mongoose.Schema({
    name: { type: String },
    lastname: { type: String },
    cellphone: [String],
    location: { type: String },
    birthDate: { type: Date },
    about : { type: String, max: 200},
    experience : [
        {
            jobTitle: { type: String },
            jobPosition : { type: String },
            jobDescription : { type: String, max: 300},
            initJob : { type: Date },
            endJob : { type: Date }
        }
    ],
    academy: [
        {
            academy: {type:String},
            descriptionAcademy: {type:String, max:120},
            finishedAcademy: {type:Boolean, default: false},
            entryAcademy: {type:Date},
            finishAcademy: {type:Date},
            skillsAcademy: [String]
        }
    ],
    courses: [
    {
            nameCourse: { type: String, required: true },
            descriptionCourse: { type: String, require: true },
            dateCourse: { type: String }
        }
    ],
    skills: [
        {
            nameSkill : { type: String },
            descriptionSkill : { type: String },
            levelSkill : { type: Number, default: 0}
        }
    ],
    more: [
        {
            moreAbout: {type: String, max: 200},
            moreInfoHobbies: [String] 
        }
    ], //create method
    learning: [
        {
            imageLearning: {type:String},
            titleLearning: {type:String},
            descriptionLearning: {type:String, max:100}
        }
    ], //create method
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('cv', ResumeEn, 'curris' );