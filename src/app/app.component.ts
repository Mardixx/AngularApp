import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCardComponent } from './shared/components/post-card-component/post-card-component.component';
import { GetCardComponent } from './shared/components/get-card/get-card.component';
import { FormsModule } from '@angular/forms';
import { SearchCardComponent } from './shared/components/search-card/search-card.component';
import { HelpPageComponent } from './shared/components/help-page/help-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, GetCardComponent, PostCardComponent, SearchCardComponent, HelpPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
