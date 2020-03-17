import express from "express";
import * as bodyParser from "body-parser";
import firebase from "firebase";
import * as admin from 'firebase-admin';
import {BussinessService} from "./module/bussiness/bussiness.service";
import {businessRouter} from "./module/bussiness/business.router";
import {LANGUAGE_COLLECTION_PATH} from "./module/base/constant";
import {LanguageModel} from "./module/base/language.model";


var firebaseConfig = {
    apiKey: "AIzaSyADArOxDnA0_U8j3j-PptvBX9Hivu32B2E",
    authDomain: "ai-research-e05fb.firebaseapp.com",
    databaseURL: "https://ai-research-e05fb.firebaseio.com",
    projectId: "ai-research-e05fb",
    storageBucket: "ai-research-e05fb.appspot.com",
    messagingSenderId: "729306604748",
    appId: "1:729306604748:web:6843eb159cbaccff1ace69",
    measurementId: "G-EQX38SW9CX"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);// firebase.analytics();

let serviceAccount = require('./ai-research.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

class App {
    public app: express.Application;


    constructor() {
        this.app = express();
        this.config();


    }


    private config(): void {
        // Giúp chúng ta tiếp nhận dữ liệu từ body của request
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(bodyParser.json());
        this.app.use("/business", businessRouter);
        this.app.use('/language', languageRouter);
        this.testApi();

    }

    public testApi() {
        this.app.get('/', function (req, res) {
            console.log("HTTP Get Request");
            res.send("HTTP GET Request");
            // firebase.database().ref('users').set({name: 'abc'}).then(r => {
            //     console.log('save data success');
            // });


            // let db = admin.firestore();
            // let docRef = db.collection('users').doc();
            //
            // let setAda = docRef.set({
            //     first: 'Ada',
            //     last: 'Lovelace',
            //     born: 1815
            // });
            // BussinessService.findAll().then(snapshot => {
            //     if (snapshot.empty) {
            //         console.log('No matching documents.');
            //         return;
            //     }
            //     snapshot.forEach(result => {
            //         console.log(result.id, '=>', result.data().name);
            //     })
            // });
        });

    }
}

export const languageGetAll = () => {
    let db = admin.firestore();
    let docRef = db.collection(LANGUAGE_COLLECTION_PATH);
    return docRef.get();
};
export const languageRouter = express.Router();
languageRouter.get('/', async (req, res) => {
    let list: Array<LanguageModel> = [];
    let respone = await languageGetAll();
    if (!respone.empty) {
        respone.forEach(result => {
            let mo = new LanguageModel();
            mo = mo.convertData(result);
            list.push(mo);
        });
    }
    res.status(200).send(list);
});
languageRouter.post('/', (req, res) => {
    let db = admin.firestore();
    let docRef = db.collection(LANGUAGE_COLLECTION_PATH).doc();
    let currLang = {
        key: req.body.key,
        value: req.body.value
    };
    docRef.set(currLang).then(value => {
        res.status(200).send(value.writeTime.valueOf());
    });

});

export default new App().app;
