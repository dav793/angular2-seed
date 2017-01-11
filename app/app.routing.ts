import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { ContactListComponent }  from './components/contact/list/contact-list.component';
import { ContactViewComponent }  from './components/contact/view/contact-view.component';

const routes: Routes = [
	// Add your routes here
    {path: 'contacts/:id',    component: ContactViewComponent},
    {path: 'contacts',    	  component: ContactListComponent},
    {path: '',        		    component: DashboardComponent},
    {path: '**',              redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);
