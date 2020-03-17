import {BaseModel} from "../base/base.model";

export class CategoriesModel extends BaseModel{
    public name: string = '';
    public businessId: string = '';
    getClassName(): string {
        return "CategoriesModel";
    }

    convertData(input: any): Object {
        let result: CategoriesModel = new CategoriesModel();
        result.id = input.id;
        result.name = input.name;
        result.businessId = input.businessId;

        return result;
    }
    
}
