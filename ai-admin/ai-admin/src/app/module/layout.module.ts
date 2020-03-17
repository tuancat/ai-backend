import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './home/home.component';

@NgModule({
imports: [
  FormsModule, RouterModule, NgbModule
],
declarations: [HomeComponent]
})
export class LayoutModule {

}
