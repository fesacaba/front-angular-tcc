import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'cadastrar',
        loadChildren: () => import('./cadastrar/cadastrar.module').then(m => m.CadastrarModule)
    },
    {
        path: 'logar',
        loadChildren: () => import('./logar/logar.module').then(m => m.LogarModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
