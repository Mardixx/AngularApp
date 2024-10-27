import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CalculateService } from '../../services/calculate/calculate.service';
import { DropzoneComponent } from '../dropzone/dropzone.component';

@Component({
  selector: 'app-header',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [DropzoneComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title: string = 'Test';
  isFormDisabled: boolean = true;
  testId = 'main-cta';
  isAdmin = true;
  ingredients = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2}
  ];
  private calculateService = inject(CalculateService);
  totalCost = this.calculateService.add(27, 18);

  changeTitle(newTitle: string) {
      this.title = newTitle;
  }
  logInfo(event: MouseEvent) {
    console.log(event.target);
  }
}
