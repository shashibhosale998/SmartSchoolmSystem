import { Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

export const routes: Routes = [


    { path: '', redirectTo: 'app-userslogin', pathMatch: 'full' }, // ✅ Redirect to login by default
    { path: 'app-userslogin', component: UserloginComponent },
    { path: 'app-admindashboard', component: AdmindashboardComponent }
];
