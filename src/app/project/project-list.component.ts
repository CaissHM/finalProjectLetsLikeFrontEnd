import { Component, OnInit } from '@angular/core';
import { AccountService, ProjectService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'project-list.component.html' })
export class ProjectListComponent implements OnInit {
    projects: any;

    constructor(private accountService: AccountService,
      private projectService: ProjectService) {}

    ngOnInit() {
        this.projectService.getAll()
        .pipe(first())
        .subscribe(projects => this.projects = projects);
    }
}
