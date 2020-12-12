import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-not-implemented',
    templateUrl: './not-implemented.component.html',
    styleUrls: ['./not-implemented.component.scss']
})
export class NotImplementedComponent implements OnInit {
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
    }

    navegar() {
        this.route.navigate(['menu', this.idUser]);
    }
}
