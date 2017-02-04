"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about.component');
var contact_component_1 = require('./contact.component');
var home_component_1 = require('./home.component');
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
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
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
// another way to have done this (as shown in Egghead.io's Angular 2 video)
// export default RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map