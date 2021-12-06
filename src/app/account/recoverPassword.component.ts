import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'recoverPassword.component.html' })
export class RecoverPasswordComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor( 
        private router: Router,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', Validators.required]
        });
    }

    // getter para facilitar o acesso aos campos do formulário
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset do alertas ao enviar
        this.alertService.clear();

        // se o formulário for inválido
        if (this.form.invalid) {
            return;
        }

        this.loading = true;

        if (this.f.email.value) {
            console.log('Estamos Aqui!');
        }
    }

    cancelar() {
        this.router.navigate(['login']);
    }
}