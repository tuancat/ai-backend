import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './home/home.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
imports: [
  FormsModule, RouterModule, NgbModule
],
declarations: [HomeComponent, LeftMenuComponent]
})
export class LayoutModule {

}
