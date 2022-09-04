import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LogarRoutingModule} from "./logar-routing.module";
import {LogarComponent} from "./logar.component";

@NgModule({
    declarations: [LogarComponent],
    imports: [LogarRoutingModule, CommonModule, ReactiveFormsModule],
    exports: [HttpClientModule]
})
export class LogarModule {

}
