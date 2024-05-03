import {Component, inject, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {LabelComponent} from "../label/label.component";
import {RouterLink} from "@angular/router";
import {AuthentificationService} from "../authentification.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, LabelComponent, RouterLink],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit{
  authentification = inject(AuthentificationService);


  http: HttpClient = inject(HttpClient)

  listeProduit: any[] = [];
 ngOnInit(){
   environment
   this.http
     .get<any[]>(`http://${environment.urlServeur}/produit/liste`)
     .subscribe(listeProduit => this.listeProduit = listeProduit);

   console.log(this.authentification.utilisateur);
 }

  onSupprimerProduit(idProduit: number) {

   this.http
     .delete(`http://${environment.urlServeur}/produit/` + idProduit)
     .subscribe(resultat => console.log(resultat));
  }


}
