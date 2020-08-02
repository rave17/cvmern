const mongoose = require('mongoose');
const ResumeEn = require('../../db/models/ResumeEn.Model');

module.exports = {

    getInfo: async (req, res) => {
        try {
            const resume = await ResumeEn.find();

            console.log(resume)
            res.status(200).json(resume);
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    },

    saveInfo: async (req, res) => {
        let body = req.body;
        const resume = new ResumeEn({
            name: body.name,
            lastname: body.lastname,
            cellphone: body.cellphone,
            location: body.location,
            about: body.about
        });

        try {
            const resumeSaved = await resume.save();
            console.log(resumeSaved);

            res.status(200).send(resumeSaved);
        } catch (err) {
            console.log(err);
            res.status(400).send(err)
        }

    },

    saveExperience: async (req, res) => {
        let body = req.body;
        ResumeEn.update({ _id: body._id }, {
            $push: {
                "experience": {
                    jobTitle: body.jobTitle,
                    jobPosition: body.jobPosition,
                    jobDescription: body.jobDescription,
                    initJob: body.initJob,
                    endJob: body.endJob
                }
            }
        },
            function (err) {
                if (err) {
                    return res.json({
                        success: false,
                        msj: "error in experience job",
                        err
                    })
                } else {
                    return res.json({
                        success: true,
                        msj: "add course"
                    });
                }
            }
        )
    },

    saveAcademy: async (req, res) => {
        let body = req.body;
        ResumeEn.update({ _id: body._id }, {
            $push: {
                "academy": {
                    academy: body.academy,
                    descriptionAcademy: body.descriptionAcademy,
                    finishedAcademy: body.finishAcademy,
                    entryAcademy: body.entryAcademy,
                    finishAcademy: body.finishAcademy,
                    skillsAcademy: body.skillsAcademy
                }
            }
        },
            function (err) {
                if (err) {
                    return res.json({
                        success: false,
                        msj: "error in academy",
                        err
                    })
                } else {
                    return res.json({
                        success: true,
                        msj: "add formal education"
                    });
                }
            }
        )
    },

    saveCourses: async (req, res) => {
        let body = req.body;
        ResumeEn.update({ _id: body._id }, {
            $push: {
                "courses": {
                    nameCourse: body.nameCourse,
                    descriptionCourse: body.descriptionCourse,
                    dateCourse: body.dateCourse
                }
            }
        },
            function (err) {
                if (err) {
                    return res.json({
                        success: false,
                        msj: "error in course",
                        err
                    })
                } else {
                    return res.json({
                        success: true,
                        msj: "add course"
                    });
                }
            }
        )
    },

    saveSkill: async (req, res) => {
        let body = req.body;
        ResumeEn.update({ _id: body._id }, {
            $push: {
                "skills": {
                    nameSkill: body.nameSkill,
                    descriptionSkill: body.descriptionSkill,
                    levelSkill: body.levelSkill
                }
            }
        },
            function (err) {
                if (err) {
                    return res.json({
                        success: false,
                        msj: "error in skill",
                        err
                    })
                } else {
                    return res.json({
                        success: true,
                        msj: "add skill"
                    });
                }
            }
        )
    },

    saveMore:  async (req, res) => {
        let body = req.body;
        ResumeEn.update({ _id: body._id }, {
            $push: {
                "more": {
                    moreAbout: body.moreAbout,
                    moreinfoHobbies: body.moreinfoHobbies
                }
            }
        },
            function (err) {
                if (err) {
                    return res.json({
                        success: false,
                        msj: "error in more section",
                        err
                    })
                } else {
                    return res.json({
                        success: true,
                        msj: "add more info"
                    });
                }
            }
        )
    },

    saveLearning:  async (req, res) => {
        let body = req.body;
        ResumeEn.update({ _id: body._id }, {
            $push: {
                "learning": {
                    imageLearning: body.imageLearning,
                    titleLearning: body.titleLearning,
                    descriptionLearning: body.descriptionLearning
                }
            }
        },
            function (err) {
                if (err) {
                    return res.json({
                        success: false,
                        msj: "error in current learning",
                        err
                    })
                } else {
                    return res.json({
                        success: true,
                        msj: "add skills current learning"
                    });
                }
            }
        )
    },

    deleteInfo: async(req, res) => {
        const id = req.params.id;
        console.log(id);
        await ResumeEn.findByIdAndDelete(id, function (err) {
            if (err) {
                console.log(`not deleted, error: ${err}`)
            } else {
                console.log(`element has been deleted`)
            }
        })

    },

    deleteAll: (req, res) => {
        ResumeEn.remove({}, (err) => {
            if (err) {
                console.log(`cannot delete all, error: ${err}`)
            } else {
                console.log(`all documents has been deleted`);
            }
        })
    }


};