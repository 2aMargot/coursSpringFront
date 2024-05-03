import {Component, inject} from '@angular/core';
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  authentification = inject(AuthentificationService);

  ngOnInit(){

  }
}
