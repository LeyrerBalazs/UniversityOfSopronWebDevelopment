/***********/
/* Imports */
/***********/
// Main imports
const express = require('express');;
const path = require('path');
const bodyParser = require('body-parser');
const crypto = require('crypto');
// Custom imports
const { logs } = require('./functions/log');
const { getUserDataFromMongoose, getUserDataFromMongoosePublic, getQuestionDataFromMongoose, getQuestionDataFromMongoosePublic, deleteQuestionFromMongoose, addQuestionToMongo, addUserToMongo, updateQuestion, uploadUserChange } = require('./functions/mongose');
logs('Imports are succes');

/***************/
/* Server init */
/***************/
// Server initialization
const server = express();
logs("Server initialization is starting.");
// Uses
server.use(express.static('../frontend/build'));
server.use(express.json({limit: '50mb'}));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
logs('Server initialization success.');

/*************/
/* GET calls */
/*************/
// "/" link GET function
server.get('/', (request, response) => {
    try {
        response.sendFile(path.resolve(__dirname + "./../frontend/build/index.html"));
        logs('\"/\" Request from ip=' + request.ip + ' method=' + request.method + '.\n');
    }
    catch {
        logs("Something is wrong in GET \"/\"");
    }
});
server.get('/api/questiondata', async (request, response) => {
    try {
        response.send(await getQuestionDataFromMongoosePublic());
        logs('\"/\questiondata" Request from ip=' + request.ip + ' method=' + request.method);
        logs('Send to ip=' + request.ip + 'some public data.');
    }
    catch {
       logs('Something is wrong in GET \"/\"');
    }
});
server.get('/api/questiondataforusers', async (request, response) => {
    try {
        response.send(await getQuestionDataFromMongoose());
        logs('\"/\questiondataforusers" Request from ip=' + request.ip + ' method=' + request.method);
        logs('Send to ip=' + request.ip + 'some public data.');
    }
    catch {
        logs('Something is wrong in GET \"/\"');
    }
});
// "/tagok" link GET function
server.get('/api/tagok', async (request, response) => {
    try {
        response.send(await getUserDataFromMongoosePublic());
        logs('\"/tagok\" Request from ip=' + request.ip + ' method=' + request.method + '.\n');
        logs('Send to ip=' + request.ip + 'some public data.\n');
    }
    catch {
        logs('Something is wrong in GET \"/tagok\"');
    }
});


/**************/
/* POST calls */
/**************/
// "/bejelentkezes" link POST function
server.post('/api/bejelentkezes', async (request, response) => {
    try {
        const userData = await getUserDataFromMongoose(request.body.username, crypto.createHash('md5').update(data.password).digest('hex'));
        if (userData !== undefined || userData !== null || userData !== []) {
            response.send(userData);
        }
        else {
            response.send(undefined);
        }
        logs('\"/api/bejelentkezes\" Request from ip=' + request.ip + ' method=' + request.method);
    }
    catch (error) {
        logs('Something is wrong in POST \"/api/bejelentkezes\"');
    }
})
// "/kerdesfelteves" link POST function
server.post('/api/kerdesfelteves', async (request, response) => {
    try {
        await addQuestionToMongo(request.body.question)
        logs('\"/api/kerdesfelteves\" Request from ip=' + request.ip + ' method=' + request.method);
    }
    catch {
        logs('Something is wrong in POST \"/api/kerdesfelteves\"');
    }
})
// "/deletequestion" link POST function
server.post('/api/deletequestion', async (request, response) => {
    try {
        response.send(await deleteQuestionFromMongoose(request.body.question));
        logs('\"/api/deletequestion\" Request from ip=' + request.ip + ' method=' + request.method);
        logs('Delete a document from Mongoose question collection.');
    }
    catch {
        logs('Something is wrong in POST \"/api/deletequestion\"');
    }
});
// "/upload" link POST function
server.post('/api/upload', async (request, response) => {
    try {
        await uploadUserChange(request.body)
        logs('\"/upload\" Request from ip=' + request.ip + ' method=' + request.method + '.\n');
    }
    catch {
        logs('Something is wrong in POST \"/api/upload"');
    }
});
// "/newuser" link POST function
server.post('/api/newuser', async (request, response) => {
    try {
        await addUserToMongo(request.body)
        logs('\"/newuser\" Request from ip=' + request.ip + ' method=' + request.method + '.\n');
    }
    catch {
        logs('Something is wrong in POST \"/api/newuser"');
    }
});
// "/tag" link POST function
server.post('/api/tag', async (request, response) => {
    const userData = await getUserDataFromMongoose(request.body.username);
    if (userData !== undefined || userData !== null || userData !== []) {
        response.send(userData);
    }
    else {
        response.send(undefined);
    }
})
// "/givedanswer" link POST funciton
server.post('/api/givedanswer', async (request, response) => {
    console.log(request.body)
    try {
        await updateQuestion(request.body);
        logs('\"/givedanswer\" Request from ip=' + request.ip + ' method=' + request.method + '.\n');
    }
    catch {
        logs('Something is wrong in POST \"/api/givedanswer"');
    }
})

/*****************/
/* Server listen */
/*****************/
server.listen(8080, () => {
    logs('Server listen on  http://localhost:8080 and http://127.0.0.1:8080');
});