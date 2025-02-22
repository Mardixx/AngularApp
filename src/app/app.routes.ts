import { Routes } from '@angular/router';
import { PostCardComponent } from './shared/components/post-card-component/post-card-component.component';
import { HelpPageComponent } from './shared/components/help-page/help-page.component';

export const routes: Routes = [
    {
        path: 'help',
        component: HelpPageComponent
    },
];
