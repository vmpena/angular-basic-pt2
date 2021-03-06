import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ParameterDetailsComponent } from './parameter-details/parameter-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { FacetsComponent } from './facets/facets.component';
import { FormsComponent } from './forms/forms.component';
import { ClassesComponent } from './classes/classes.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
      path:'customers',
      component: CustomersComponent
    },
    {
      path:'parameters',
      component: ParametersComponent
    },
    {
      path:'parameter-details',
      component: ParameterDetailsComponent
    },
    {
      path:'customer-detail/:id',
      component: CustomerDetailComponent
    },
    {
      path:'parent',
      component: ParentComponent
    },
    {
      path:'facets',
      component: FacetsComponent
    },
    {
      path:'forms',
      component: FormsComponent
    },
    {
      path:'classes',
      component: ClassesComponent
    },
    {
      path: '**',
      component: PagenotfoundComponent
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

