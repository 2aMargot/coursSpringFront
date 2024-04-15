import {Component, inject, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {LabelComponent} from "../label/label.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, LabelComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit{

  http: HttpClient = inject(HttpClient)

  listeProduit: any[] = [];
 ngOnInit(){
   this.http
     .get<any[]>("http://localhost:8080/produit/liste")
     .subscribe(listeProduit => this.listeProduit = listeProduit);
 }

  onSupprimerProduit(idProduit: number) {

   this.http
     .delete("http://localhost:8080/produit/" + idProduit)
     .subscribe(resultat => console.log(resultat));
  }


}
