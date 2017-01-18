/**
 * Created by willians on 17/1/17.
 */
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
export const routes: Routes = [
    {path: '',            component: HomeComponent },
    {path: '*',           component: HomeComponent },
    {path: 'home',           component: HomeComponent },
    {path: 'about',           component: AboutComponent }
];