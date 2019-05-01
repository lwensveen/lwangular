import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';

const routes: Routes = [
    {
        path: 'examples/webshop',
        loadChildren: './webshop/webshop.module#WebshopModule'
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'examples/csv-upload',
        component: CsvUploadComponent
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
