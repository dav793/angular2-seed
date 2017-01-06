import { Routes, RouterModule } from '@angular/router';
import { Sandbox7Component } from './components/sandbox/sandbox7.component';
import { Sandbox8Component } from './components/sandbox/sandbox8.component';

const routes: Routes = [
	// Add your routes here
    {path: 'sandbox8',   component: Sandbox8Component},
    {path: '',   component: Sandbox7Component},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);
