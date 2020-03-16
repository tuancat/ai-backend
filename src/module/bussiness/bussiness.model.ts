export class BussinessModel {
    public id: string;
    public name: string;

    constructor() {
        this.id = '';
        this.name = '';
    }


    public static convertData(input: any) {
        let result = new BussinessModel();
        result.id = input.id;
        result.name = input.name;
    }
}
