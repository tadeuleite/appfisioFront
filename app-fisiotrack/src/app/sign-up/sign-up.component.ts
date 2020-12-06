import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
    ngOnInit() {
    }

    cadastrar() {
        const login = document.getElementById('login').nodeValue;
        const password = document.getElementById('password').nodeValue;

        const data = JSON.stringify({ email: login, senha: password });

        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', function() {
            const avisoLogin = document.getElementById('aviso-login');
            if (this.status !== 0) {
                if (this.readyState === 4 && this.status === 200) {
                    avisoLogin.style.backgroundColor = 'green';
                    avisoLogin.style.display = 'block';
                    avisoLogin.innerHTML = '<span class=\'closebtn\'>&times;</span>';
                    avisoLogin.innerHTML += 'Você se cadastrou com sucesso';
                } else {
                    avisoLogin.style.backgroundColor = 'red';
                    avisoLogin.style.display = 'block';
                    avisoLogin.innerHTML = '<span class=\'closebtn\'>&times;</span>';
                    avisoLogin.innerHTML += 'Erro ao cadastrar, verifique suas credenciais';
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
