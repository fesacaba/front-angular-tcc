import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LogarComponent} from "./logar.component";

const routes: Routes = [
    {
        path: '',
        component: LogarComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogarRoutingModule {

}
