import {Component, inject, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatChipListbox, MatChipOption} from "@angular/material/chips";
import {ActivatedRoute, Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-edit-produit',
  standalone: true,
  imports: [MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipListbox,
    MatChipOption
  ],
  templateUrl: './edit-produit.component.html',
  styleUrl: './edit-produit.component.scss'
})
export class EditProduitComponent implements OnInit {

  http: HttpClient = inject(HttpClient)
  router: Router = inject(Router);
  formBuilder: FormBuilder = inject(FormBuilder)
  route: ActivatedRoute = inject(ActivatedRoute);
  formulaire: FormGroup = this.formBuilder.group(
    {
      nom: ["", [Validators.required]],
      code: ["", [Validators.required]],
      description: ["", []],
      prix: [1, []],
      etat: [null, [Validators.required]],
      listeEtiquette: [[], []],
    }
  )

  listeEtat: any[] = [];
  listeEtiquette: any[] = [];
  idProduit: number | null = null;

  ngOnInit(): void {
    environment

    this.route.params.subscribe(parametres => {
      this.idProduit = parametres['id'];
      if (this.idProduit != null && !isNaN(this.idProduit)) {
        this.http.get("http://" + environment.urlServeur +"/produit/" + this.idProduit)
          .subscribe({
            next: (produit) => this.formulaire.patchValue(produit),
            error: (error) => {
              if (error.status == 404) {
                alert("Le produit n'existe plus");
              }
            }
          })
      }
    });

    this.http
      .get<any []>("http://" + environment.urlServeur +"/etat-produit/liste")
      .subscribe(resultat => this.listeEtat = resultat);

    this.http
      .get<any []>("http://" + environment.urlServeur +"/etiquette-produit/liste")
      .subscribe(resultat => this.listeEtiquette = resultat);
  }


  onSubmit() {
    if (this.formulaire.valid) {

      if(this.idProduit){
        this.http.put("http://" + environment.urlServeur +"/produit/" + this.idProduit, this.formulaire.value)
          .subscribe(resultat => this.router.navigateByUrl("/accueil"));
      }
      else {
        this.http.post("http://" + environment.urlServeur +"/produit", this.formulaire.value)
          .subscribe(resultat => this.router.navigateByUrl("/accueil"));
      }

    }
  }

  comparateurEtat(a: any, b: any) {

    return a != null && b != null && a.id == b.id;
  }

}
