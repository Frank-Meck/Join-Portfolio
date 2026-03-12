import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../firebase-service/auth.servic';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot): any => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // Seiten, die auch für Gäste erlaubt sind
  const publicRoutes = ['privacy', 'legal'];

  return auth.isLoggedIn$.pipe(
    take(1),
    map((loggedIn) => {
      const routePath = route.routeConfig?.path || '';

      // Wenn Public-Seite → immer Zugriff erlauben
      if (publicRoutes.includes(routePath)) return true;

      // Geschützte Seite → prüfen
      if (loggedIn) return true;

      // Nicht eingeloggt → login
      return router.createUrlTree(['/login']);
    })
  );
};