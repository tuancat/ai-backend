import {BaseModel} from "./base.model";

export class LanguageModel extends BaseModel {
    public key: string = '';
    public value: string = '';

    public convertData(input: any): LanguageModel {
        let result: LanguageModel = new LanguageModel();
        result.id = input.id;
        result.key = input.data().key;
        result.value = input.data().value;
        return result;
    }

    getClassName(): string {
        return "LanguageModel";
    }
}
