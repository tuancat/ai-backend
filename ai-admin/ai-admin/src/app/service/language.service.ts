import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class LanguageService extends BaseService{
  constructor(public httpclient: HttpClient) {
    super(httpclient);
  }
  // public findAll(): Observable
}
