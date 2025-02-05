import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostCardComponent } from './shared/components/post-card-component/post-card-component.component';
import { SearchCardComponent } from './shared/components/search-card/search-card.component';

export const routes: Routes = [
    {
        path: 'search',
        component: SearchCardComponent
    },
    {
        path: '',
        component: PostCardComponent
    }
];
