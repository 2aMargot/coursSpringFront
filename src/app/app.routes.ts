import { Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {PageNonTrouveComponent} from "./page-non-trouve/page-non-trouve.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {EditProduitComponent} from "./edit-produit/edit-produit.component";

export const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  {path: "connexion", component: ConnexionComponent},
  {path: "inscription", component: InscriptionComponent},
  {path: "edit-produit", component: EditProduitComponent},
  {path: "", redirectTo: "accueil", pathMatch: 'full'},
  {path: "**", component: PageNonTrouveComponent}

];
