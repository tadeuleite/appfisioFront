import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.scss']
})

export class PatientComponent implements OnInit {

    idUser: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        if (this.activatedRoute.firstChild) {
            this.activatedRoute.firstChild.params.subscribe(param => {
                this.idUser = param.idUser;
            });
        }
    }

    ngOnInit() {
    }

    cadastrar() {
        const nome = (<HTMLInputElement>document.getElementById('nome')).value;
        const cpf = (<HTMLInputElement>document.getElementById('cpf')).value;
        const email = (<HTMLInputElement>document.getElementById('email')).value;
        const telefone = (<HTMLInputElement>document.getElementById('telefone')).value;

        const data = JSON.stringify({
            nome: nome,
            cpf: cpf,
            email: email,
            telefone: [telefone]
        });

        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', function () {
            const avisoLogin = document.getElementById('aviso-login');
            if (this.status !== 0) {
                if (this.readyState === 4 && (this.status === 200 || this.status === 201)) {
                    avisoLogin.style.backgroundColor = 'green';
                    avisoLogin.style.display = 'block';
                    avisoLogin.innerHTML = 'Paciente cadastrado com sucesso';
                } else {
                    avisoLogin.style.backgroundColor = 'red';
                    avisoLogin.style.display = 'block';
                    avisoLogin.innerHTML = 'Erro ao cadastrar paciente, tente novamente mais tarde';
                }
            }
        });

        xhr.open('POST', 'http://localhost:8080/pacientes/');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(data);
    }

    fecharAviso() {
        const avisoLogin = document.getElementById('aviso-login');
        avisoLogin.style.display = 'none';
    }
}
