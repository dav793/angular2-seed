import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home";
import { ContactListComponent } from './components/contact/list/list';
import { ContactViewComponent } from './components/contact/view/view';
import { SeedComponent } from "./components/z-seed/seed";

const routes: Routes = [
	// Add your routes here
	{path: 'contacts/:id',   component: ContactViewComponent},
    {path: 'contacts',    	component: ContactListComponent},
    {path: '',        		component: HomeComponent},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);