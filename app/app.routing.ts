import { Routes, RouterModule } from '@angular/router';
import { Sandbox6aComponent } from './components/sandbox/sandbox6/sandbox6a.component';
import { Sandbox6bComponent } from './components/sandbox/sandbox6/sandbox6b.component';

const routes: Routes = [
	// Add your routes here
    {path: 'sandbox6b',   component: Sandbox6bComponent},
    {path: '',   component: Sandbox6aComponent},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);
