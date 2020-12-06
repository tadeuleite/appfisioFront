import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

    ngOnInit() {
        document.getElementById('exibirGrid').style.display = 'none';
        setTimeout(() => {
            document.getElementById('ocultarLogo').style.display = 'none';
            document.getElementById('exibirGrid').style.display = 'block';
        }, 1000);
    }

    toggleModal() {
        const modal = document.querySelector('.modal');
        const closeButton = document.querySelector('.close-button');

        closeButton.addEventListener('click', this.toggleModal);
        window.addEventListener('click', this.windowOnClick);
        modal.classList.toggle('show-modal');
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
