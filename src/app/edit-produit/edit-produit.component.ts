import {Component, inject, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-produit',
  standalone: true,
  imports: [MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-produit.component.html',
  styleUrl: './edit-produit.component.scss'
})
export class EditProduitComponent implements OnInit{

  http: HttpClient = inject(HttpClient)

  formBuilder: FormBuilder = inject(FormBuilder)
  formulaire: FormGroup = this.formBuilder.group(
    {
      nom:["",[Validators.required]],
      code:["",[Validators.required]],
      description:["",[]],
      prix: [1,[]],
      etat:[null,[Validators.required]],
      listeEtiquette:[[],[]],
    }
  )

  listeEtat: any[] = [];
  listeEtiquette : any[] = [];

  ngOnInit(): void {
    this.http
      .get<any []>("http://localhost:8080/etat-produit/liste")
      .subscribe(resultat => this.listeEtat = resultat)

    this.http
      .get<any []>("http://localhost:8080/etiquette-produit/liste")
      .subscribe(resultat => this.listeEtiquette = resultat)
  }


  onSubmit(){
    console.log(this.formulaire.value);
  }
}
