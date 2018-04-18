/*
 * Created on: Thu Apr 20 2017
 * Author: GB
 * Description: Defined the routes and specifies which routse should receive the lockguard (requires authentication)
 * Copyright (c): 2017 CHEP
 */

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { FaceComponent } from '../face/face.component'
import { HomeComponent } from '../home.component';

export const motivatorRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
      path: 'face',
      component: FaceComponent
  },

  {
      path: 'text',
      component: FaceComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];
