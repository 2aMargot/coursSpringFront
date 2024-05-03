import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthentificationService} from "./authentification.service";

export const userGuard: CanActivateFn = (route, state) => {
  const authentification = inject(AuthentificationService);
  const router = inject(Router);

  return authentification.utilisateur != null ? true : router.parseUrl('/connexion');
};
