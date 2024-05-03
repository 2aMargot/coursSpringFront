import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {AuthentificationService} from "./authentification.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'backoffice-cours-spring';
  authentification = inject(AuthentificationService);

  ngOnInit(){
    this.authentification.authenticationAvecJwtLocalStorage()
    }


}
