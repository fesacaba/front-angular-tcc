import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./home-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./home.component";
import {MatTableModule} from "@angular/material/table";

@NgModule({
    declarations: [HomeComponent],
    imports: [HomeRoutingModule, CommonModule, MatTableModule],
    exports: [HttpClientModule]
})
export class HomeModule {

}
