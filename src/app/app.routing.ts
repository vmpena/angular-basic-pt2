import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }  from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

/*
  1)    ModuleWithProviders is a wrapper around a module that also includes the providers:
        https://angular.io/docs/ts/latest/api/core/index/ModuleWithProviders-interface.html

  2)    RouterModule.forRoot() creates a module that contains all the directives and routes
        plus the router service itself:
        https://angular.io/docs/ts/latest/api/router/index/RouterModule-class.html
*/

// the constant "Routing" is a configured RouterModule
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// another way to have done this (as shown in Egghead.io's Angular 2 video)
// export default RouterModule.forRoot(appRoutes);

