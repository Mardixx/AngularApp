import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PostCardComponent } from './shared/components/post-card-component/post-card-component.component';

export const routes: Routes = [
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: '',
        component: PostCardComponent
    }
];
