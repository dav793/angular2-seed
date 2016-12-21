import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home";

const routes: Routes = [
	// Add your routes here
    {path: '',        component: HomeComponent},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);