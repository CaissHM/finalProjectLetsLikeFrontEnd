import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { LayoutComponent } from './layout.component';
import { ProjectListComponent } from './project-list.component';
import { ProjectAddEditComponent } from './project-add-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProjectRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ProjectListComponent,
        ProjectAddEditComponent
    ]
})
export class ProjectModule { }