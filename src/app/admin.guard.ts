import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthentificationService} from "./authentification.service";

export const adminGuard: CanActivateFn = (route, state) => {
  const authentification = inject(AuthentificationService);
  const router = inject(Router);

  return authentification.utilisateur?.admin == 1 ? true : router.parseUrl('/connexion');
};
