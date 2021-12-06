import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, ProjectService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'project-add-edit.component.html' })
export class ProjectAddEditComponent implements OnInit {
    form: FormGroup;
    submitted = false;
    loading = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private projectService: ProjectService,
        private alertService: AlertService
    ){}

    ngOnInit() {
        this.form = this.formBuilder.group ({
            nome: ['', Validators.required],
            url: ['', Validators.required],
            image: ['', Validators.required]
        })
    }

    get f() { 
        return this.form.controls;
    }

    onSubmit() {
        this.submitted = true;

        this.alertService.clear();

        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.projectService.projectAddEdit(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    const edit = this.route.snapshot.queryParams['edit'] || '/';
                    this.router.navigateByUrl(edit);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    cancelar() {
        this.router.navigate(['projects']);
    }
}