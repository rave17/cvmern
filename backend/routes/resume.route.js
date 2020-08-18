const route = require('express').Router();
const { getInfo,
    saveInfo,
    saveCourses,
    saveSkill,
    saveExperience,
    deleteInfo,
    deleteAll,
    saveAcademy,
    saveMore,
    saveLearning,
    searchById } = require('../controllers/Controller');
    

route.get('/presentation', getInfo);

route.post('/create', saveInfo);

route.post('/addcourse', saveCourses);

route.get('/searchinfo/:id', searchById);

route.post('/addacademystudy', saveAcademy);

route.post('/addskill', saveSkill);

route.post('/addexperience', saveExperience);

route.post('/addmoreinfo', saveMore);

route.post('/addcurrentlerning', saveLearning);

route.delete('/deleteinfo/:id', deleteInfo);

route.delete('/deleteall', deleteAll);//deprecated


module.exports = route;