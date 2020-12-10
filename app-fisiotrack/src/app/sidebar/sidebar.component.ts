import { Component, OnInit } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  idUser: number;
  private routeData;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        this.routeData = data.snapshot.params.idUser;
        if (this.routeData) {
          this.idUser = this.routeData;
        }
      }
    });
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('mySidenav').style.zIndex = '10';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
  }

  navegar(nomeRota) {
    this.router.navigate([nomeRota, this.idUser]);
  }
}
