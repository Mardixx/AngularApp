import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CustomSliderComponent } from './shared/components/custom-slider/custom-slider.component';
import { PostCardComponent } from './shared/components/post-card-component/post-card-component.component';
import { GetCardComponent } from './shared/components/get-card/get-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CustomSliderComponent, GetCardComponent, PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
