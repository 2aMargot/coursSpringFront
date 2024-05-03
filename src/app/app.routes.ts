import { Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {PageNonTrouveComponent} from "./page-non-trouve/page-non-trouve.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {EditProduitComponent} from "./edit-produit/edit-produit.component";
import {userGuard} from "./user.guard";
import {adminGuard} from "./admin.guard";
import {ProfilComponent} from "./profil/profil.component";

export const routes: Routes = [
  {path: "accueil", component: AccueilComponent, canActivate: [userGuard]},
  {path: "connexion", component: ConnexionComponent},
  {path: "inscription", component: InscriptionComponent},
  {path: "profil", component: ProfilComponent, canActivate: [userGuard]},
  {path: "edit-produit", component: EditProduitComponent, canActivate:[adminGuard]},
  {path: "edit-produit/:id", component: EditProduitComponent, canActivate:[adminGuard]},
  {path: "", redirectTo: "accueil", pathMatch: 'full'},
  {path: "**", component: PageNonTrouveComponent}

];
