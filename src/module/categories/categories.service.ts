import admin from "firebase-admin";
import {CategoriesModel} from "./categories.model";
import {CATEGORIES_COLLECTION_PATH} from "../base/constant";


export const findAll = () => {
    let db = admin.firestore();
    return db.collection(CATEGORIES_COLLECTION_PATH).get();
};
export const addNew = (ca: CategoriesModel) => {
    let db = admin.firestore();
    let docRef = db.collection(CATEGORIES_COLLECTION_PATH).doc();
    return docRef.set(ca)
};
