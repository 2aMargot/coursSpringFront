import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  authentification = inject(AuthentificationService);
  router = inject(Router);
  onDeconnexion(){
    this.authentification.deconnexion();
    this.router.navigateByUrl('/connexion');
  }

}
