import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
    idUser: number;
    constructor(
        private route: Router,
        private activatedRoute: ActivatedRoute
    ) {
        if (this.activatedRoute.firstChild) {
            this.activatedRoute.firstChild.params.subscribe(param => {
                if (param) {
                    this.idUser = param.idUser;
                }
            });
        }
    }

    ngOnInit() {
        document.getElementById('exibirGrid').style.display = 'none';
        setTimeout(() => {
            document.getElementById('ocultarLogo').style.display = 'none';
            document.getElementById('exibirGrid').style.display = 'block';
        }, 1000);
    }

    navegar() {
        this.route.navigate(['signup']);
    }

    toggleModal(navecagao?) {
        if (!this.idUser) {
            const modal = document.querySelector('.modal');
            const closeButton = document.querySelector('.close-button');

            closeButton.addEventListener('click', this.toggleModal);
            window.addEventListener('click', this.windowOnClick);
            modal.classList.toggle('show-modal');
        } else {
            this.route.navigate([navecagao, this.idUser]);
        }
    }

    windowOnClick(event) {
        const modal = document.querySelector('.modal');
        const closeButton = document.querySelector('.close-button');

        closeButton.addEventListener('click', this.toggleModal);
        window.addEventListener('click', this.windowOnClick);
        if (event.target === modal) {
            this.toggleModal();
        }
    }
}
