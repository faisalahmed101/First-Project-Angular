import { Routes } from '@angular/router';
import { AboutComponent } from './componets/about/about.component';
import { HomeComponent } from './componets/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent}
];
