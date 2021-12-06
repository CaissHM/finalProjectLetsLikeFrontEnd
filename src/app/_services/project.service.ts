import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Project, User } from '@app/_models';
import { Form } from '@angular/forms';

// Serviços que fazem a ponte com o back-end

@Injectable({ providedIn: 'root' })
export class ProjectService {

    loginSucesso: boolean = false;
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    private projectSubject: BehaviorSubject<Project>;
    public project: Observable<Project>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    public get projectValue(): Project {
      return this.projectSubject.value;
  }

    getAll() {
        return this.http.get<Project[]>(`${environment.apiUrl}/api/Projeto`);
    }

    projectAddEdit(form: Form) {
        return this.http.post(`${environment.apiUrl}/project/projectAddEdit`, form);
    }
}
