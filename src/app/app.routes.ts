import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';

export const router: Routes = [
    { path: '', redirectTo: 'content', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'content', component: ContentComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
