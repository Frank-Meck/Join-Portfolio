import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderLoggedOut } from '../../shared/header/header-logged-out/header-logged-out';
import { NavBarLoggedOut } from '../../shared/nav-bar/nav-bar-logged-out/nav-bar-logged-out';

@Component({
  selector: 'app-main-layout-unlogged',
  standalone: true,
  imports: [
    HeaderLoggedOut,
    NavBarLoggedOut,
    RouterModule
  ],
  templateUrl: './main-layout-unlogged.html',
  styleUrls: ['./main-layout-unlogged.scss']
})
export class MainLayoutUnlogged {}