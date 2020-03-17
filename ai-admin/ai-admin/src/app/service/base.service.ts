import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BaseService {
  public http: HttpClient;

  constructor(public httpClient: HttpClient) {
    let me = this;
    me.http = httpClient;
  }
}
