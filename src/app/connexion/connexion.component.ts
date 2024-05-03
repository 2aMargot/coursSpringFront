import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {

  formBuilder: FormBuilder = inject(FormBuilder);
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);
  erreurConnexion: boolean = false;
  authentification = inject(AuthentificationService);

  formulaire: FormGroup = this.formBuilder.group({
    email: ["z@z.com",[Validators.email, Validators.required]],
    motDePasse:["0000",[Validators.required]]
  });


  onConnexion() {
    environment
    if(this.formulaire.valid){
      this.http.post<{jwt: string}>("http://" + environment.urlServeur +"/connexion", this.formulaire.value)
        .subscribe( {
          next: (resultat => {
            localStorage.setItem('jwt', resultat.jwt);
            this.authentification.authenticationAvecJwtLocalStorage();
            this.router.navigateByUrl('/accueil');
          }),
          error : (response) => {
            //alert ('Les identifiants sont incorrect')
            this.erreurConnexion = true;
          }
        })
    }

  }


}
