import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.scss'
})
export class HelpPageComponent {
  classChangeHelp: boolean = true;
  changeClassHelp() {
      this.classChangeHelp = !this.classChangeHelp;
    }
}
