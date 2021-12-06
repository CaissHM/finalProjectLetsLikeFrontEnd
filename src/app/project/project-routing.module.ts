import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ProjectAddEditComponent } from './project-add-edit.component';
import { ProjectListComponent } from './project-list.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: ProjectListComponent },
            { path: 'add', component: ProjectAddEditComponent },
            { path: 'edit/:id', component: ProjectAddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule { }