import {Component, inject} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {

  formBuilder: FormBuilder = inject(FormBuilder);
  http: HttpClient = inject(HttpClient);
  formulaire: FormGroup = this.formBuilder.group(
    {
      email: ["", [Validators.email, Validators.required]],
      motDePasse:["", [Validators.required]]
    }
  )

  afficherMotDePasse =false;
  afficherMotDePasseConfirmer = false;

  confirmationMotDePasse: String='';
  motDePasseDifferent: boolean = false;

  onInscription() {

    this.motDePasseDifferent =
      this.formulaire.get("motDePasse")?.value != this.confirmationMotDePasse;

    if(this.formulaire.valid && !this.motDePasseDifferent){
      this.http.post("http://localhost:8080/inscription", this.formulaire.value)
        .subscribe(resultat => console.log(resultat));

    }
  }

  verifierMotDePasseIdentique() {

    if(this.formulaire.get("motDePasse")?.value == this.confirmationMotDePasse){
      this.motDePasseDifferent= false;
    }
  }
}
