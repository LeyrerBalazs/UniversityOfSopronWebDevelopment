/***********/
/* Imports */
/***********/
// Default imports
const mongoose = require('mongoose');
const crypto = require('crypto');
// Custom imports
const { User } = require('./../models/useres')
const { Question } = require('./../models/questions');
const { logs } = require('./log');

/************/
/* Mongoose */
/************/
// Mongoose connect
const connectMongoose = async () => {
    const mongoDB = "mongodb+srv://test:test@mhms.320hnnv.mongodb.net/mhmsdb";
    try {
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        logs('Mongoose db is connected');
    }
    catch {
        logs('Something is wrong in connectMongoose function');
    }
}
connectMongoose()
.catch((error) => {
    logs(error);
});

/*************/ 
/* Functions */
/*************/ 
// getUserDataFromMongoose function
const getUserDataFromMongoose = async (name, pwd) => {
    try {
        let data = []
        if (pwd === undefined || pwd === null || pwd === "") {
            await User.find({ username: name })
            .then((responseData) => {
                for (let i = 0; i < responseData.length; i++) {
                    data.push({
                        name: responseData[i].name,
                        status: responseData[i].status,
                        about: responseData[i].about,
                        img: responseData[i].img,
                    });
                }
            })
            .catch((error) => {
                logs(error);
            })
        }
            else {
                await User.find({ username: name, password: pwd})
            .then((responseData) => {
                for (let i = 0; i < responseData.length; i++) {
                    data.push({
                        name: responseData[i].name,
                        status: responseData[i].status,
                        about: responseData[i].about,
                        img: responseData[i].img,
                    });
                }
            })
            .catch((error) => {
                logs(error);
            })
        }
        return data
    }
    catch {
        logs("Something is wrong in getUserDataFromMongoose function");
    }
}
// getUserDataFromMongoosePublic function
const getUserDataFromMongoosePublic = async () => {
    try {
        let data = []
        await User.find({})
        .then((responseData) => {
            for (let i = 0; i < responseData.length; i++) {
                data.push({
                    name: responseData[i].name,
                    username: responseData[i].username,
                    status: responseData[i].status,
                    about: responseData[i].about,
                    img: responseData[i].img
                });
            }
        })
        .catch((error) => {
            logs(error);
        })
        return data
    }
    catch {
        logs("Something is wrong in getUserDataFromMongoose function");
    }
}
// getQuestionDataFromMongoose
const getQuestionDataFromMongoose = async () => {
    try {
        let data = []
        await Question.find({ answerer: "" })
        .then((responseData) => {
            for (let i = 0; i < responseData.length; i++) {
                data.push({
                    question: responseData[i].question,
                    answer: responseData[i].answer,
                    answerer: responseData[i].answerer,
                });
            }
        })
        .catch((error) => {
            logs(error);
        })
        return data
    }
    catch {
        logs("Something is wrong in getQuestionDataFromMongoosePublic function");
    }
}
// getQuestionDataFromMongoosePublic
const getQuestionDataFromMongoosePublic = async () => {
    try {
        let data = []
        await Question.find({ answerer: { $ne: "" } })
        .then((responseData) => {
            for (let i = 0; i < responseData.length; i++) {
                data.push({
                    question: responseData[i].question,
                    answer: responseData[i].answer,
                    answerer: responseData[i].answerer,
                });
            }
        })
        .catch((error) => {
            logs(error);
        })
        return data
    }
    catch {
        logs("Something is wrong in getQuestionDataFromMongoosePublic function");
    }
}
// deleteQuestionFromMongoose
const deleteQuestionFromMongoose = async (data) => {
    try {
        await Question.findOneAndDelete({ question: data })
        .then(() => {
            logs("Question deleted.")
        })
        .catch((error) => {
            logs(error);
        })
    }
    catch {
        logs("Something is wrong in deleteQuestionFromMongoose function");
    }
}
// addQuestionToMongo
const addQuestionToMongo = async (data) => {
    try {
        await Question.insertMany({question: data, answer: "", answerer: ""})
        .then(() => {
            logs("Question added.");
        })
        .catch((error) => {
            logs(error);
        })
    }
    catch {
        logs("Something is wrong in addQuestionToMongo function");
    }
}
// addUserToMongo
const addUserToMongo = async (data) => {
    try {
        await User.insertMany({
            name: data.name,
            username: data.username,
            about: data.about,
            img: data.img,
            password: "4900a4e0494fb433c8adc485fa3e64f5"
        })
        .then(() => {
            logs("New user added.");
        })
        .catch((error) => {
            logs(error);
        })
    }
    catch {
        logs("Something is wrong in addUserToMongo function");
    }
}
// updateQuestion
const updateQuestion = async (data) => {
    try {
        await Question.updateOne({question: data.question}, {
            answer: data.ans,
            answerer: data.name
        })
        .then(() => {
            logs("Question was updated.");
        })
        .catch((error) => {
            logs(error);
        });
    }
    catch {
        logs("Something is wrong in updateQuestion function");
    }
}
// uploadUserChange
const uploadUserChange = async (data) => {
    console.log(data)
    try {
        if ((data.password === null || data.password === "" || data.password === undefined) && (data.image === null || data.image === "" || data.image === undefined)) {
            await User.updateOne({name: data.name}, {
                about: data.aboutme
            })
            .then(() => {
                logs("User was updated.");
            })
            .catch((error) => {
                logs(error);
            })
        }
        else if ((data.aboutme === null || data.aboutme === "" || data.aboutme === undefined)  && (data.image === null || data.image === "" || data.image === undefined)) {
            await User.updateOne({name: data.name}, {
                password: crypto.createHash('md5').update(data.password).digest('hex')
            })
            .then(() => {
                logs("User was updated.");
            })
            .catch((error) => {
                logs(error);
            })
        }
        else if ((data.password === null || data.password === "" || data.password === undefined) && (data.aboutme === null || data.aboutme === "" || data.aboutme === undefined)) {
            await User.updateOne({name: data.name}, {
                img: data.image
            })
            .then(() => {
                logs("User was updated.");
            })
            .catch((error) => {
                logs(error);
            })
        }
        else if (data.password === null || data.password === "" || data.password === undefined) {
            await User.updateOne({name: data.name}, {
                img: data.image,
                about: data.aboutme
            })
            .then(() => {
                logs("User was updated.");
            })
            .catch((error) => {
                logs(error);
            })
        }
        else if (data.image === null || data.image === "" || data.image === undefined) {
            await User.updateOne({name: data.name}, {
                password: crypto.createHash('md5').update(data.password).digest('hex'),
                about: data.aboutme
            })
            .then(() => {
                logs("User was updated.");
            })
            .catch((error) => {
                logs(error);
            })
        }
        else if (data.aboutme === null || data.aboutme === "" || data.aboutme === undefined) {
            await User.updateOne({name: data.name}, {
                password: crypto.createHash('md5').update(data.password).digest('hex'),
                img: data.image
            })
            .then(() => {
                logs("User was updated.");
            })
            .catch((error) => {
                logs(error);
            })
        }
        else {
            await User.updateOne({name: data.name}, {
                password: crypto.createHash('md5').update(data.password).digest('hex'),
                img: data.image,
                about: data.aboutme
            })
            .then(() => {
                logs("User was updated.");
            })
            .catch((error) => {
                logs(error);
            })
        }
    }
    catch {
        logs("Something is wrong in updateQuestion function");
    }
}

/***********/
/* Exports */
/***********/
module.exports = { getUserDataFromMongoose, getUserDataFromMongoosePublic, getQuestionDataFromMongoose, getQuestionDataFromMongoosePublic, deleteQuestionFromMongoose, addQuestionToMongo, addUserToMongo, updateQuestion, uploadUserChange }