import express, {Request, Response} from "express";
import {BussinessService} from "./bussiness.service";
import {BussinessModel} from "./bussiness.model";


export const businessRouter = express.Router();

businessRouter.get('/', async (req, res) => {
    const response = await BussinessService.findAll();
    let list: Array<BussinessModel> = [];
    if (response.empty) {
    } else {
        response.forEach(result => {
            let bu = new BussinessModel();
            bu.id = result.id;
            bu.name = result.data().name;
            list.push(bu);
        })
    }
    res.status(200).send(list);

});
