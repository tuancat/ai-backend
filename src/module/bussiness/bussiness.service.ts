import admin from "firebase-admin";

export class BussinessService {
    public static findAll(){
        console.log("check findall");
        let db = admin.firestore();
        return db.collection('business').get();
    }
}
