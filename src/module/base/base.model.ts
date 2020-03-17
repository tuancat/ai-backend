export abstract class BaseModel {
    public id: string = '';

    public abstract getClassName(): string;
    public abstract convertData(input: Object): Object;
}

