/*
 * Created on: Thu Apr 20 2017
 * Author: GB
 * Description: Defined the routes and specifies which routse should receive the lockguard (requires authentication)
 * Copyright (c): 2017 CHEP
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { FaceComponent } from '../face/face.component'

export const router: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: AppComponent
  },

  {
      path: 'face',
      component: FaceComponent
  }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
