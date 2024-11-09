import { Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'feed'
    },
    {
        path: 'feed',
        component: FeedComponent
    },
    {
        path: '**',
        redirectTo: 'feed'
    },
];
