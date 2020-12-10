import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

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

    logar() {
        const login = (<HTMLInputElement>document.getElementById('email')).value;
        const password = (<HTMLInputElement>document.getElementById('password')).value;

        const data = JSON.stringify({ email: login, senha: password });

        const xhr = new XMLHttpRequest();

        const thisFora = this;
        xhr.addEventListener('readystatechange', function () {
            const avisoLogin = document.getElementById('aviso-login');
            if (this.status !== 0) {
                if (this.readyState === 4 && this.status === 200) {
                    avisoLogin.style.backgroundColor = 'green';
                    avisoLogin.style.display = 'block';
                    avisoLogin.innerHTML = 'Você se cadastrou com sucesso';
                    setTimeout(() => {
                        thisFora.router.navigate(['menu/', JSON.parse(this.response).id]);
                    }, 1000);
                } else {
                    avisoLogin.style.backgroundColor = 'red';
                    avisoLogin.style.display = 'block';
                    avisoLogin.innerHTML = 'Erro ao cadastrar, verifique suas credenciais';
                }
            }
        });

        xhr.open('GET', 'http://localhost:8080/logins/' + login + '/' + password);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(data);
    }

    cadastrar() {
        const login = (<HTMLInputElement>document.getElementById('email')).value;
        const password = (<HTMLInputElement>document.getElementById('password')).value;

        const data = JSON.stringify({ email: login, senha: password });

        const xhr = new XMLHttpRequest();
        const thisFora = this;
        xhr.addEventListener('readystatechange', function () {
            const avisoLogin = document.getElementById('aviso-login');
            if (this.status !== 0) {
                if (this.readyState === 4 && (this.status === 200 || this.status === 201)) {
                    avisoLogin.style.backgroundColor = 'green';
                    avisoLogin.style.display = 'block';
                    avisoLogin.innerHTML = 'Você se cadastrou com sucesso, redirecionando para página inicial';
                    setTimeout(() => {
                        thisFora.router.navigate(['menu/', JSON.parse(this.response).id]);
                    }, 1000);
                } else {
                    avisoLogin.style.backgroundColor = 'red';
                    avisoLogin.style.display = 'block';
                    avisoLogin.innerHTML = 'Erro ao cadastrar, verifique suas credenciais';
                }
            }
        });

        xhr.open('POST', 'http://localhost:8080/logins/');
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
