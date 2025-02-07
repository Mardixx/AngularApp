import { Component } from '@angular/core';
import { RESTAPIService } from '../../services/RESTAPIService/restapiservice.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.scss'
})
export class SearchCardComponent {
  data: any = '';
  title: any = '';
  status: any = '';
  
  constructor(private service: RESTAPIService) {}

  public onGetCard() {
    return this.service.getCards().subscribe(data =>{
      this.data = data;
    });
  }
  async onDeleteCard(e: Event, id: number) {
    let input = e.target as HTMLInputElement;
    input?.parentElement?.animate(
      [
        { transform: 'scale(1.0)' },
        { transform: 'scale(0)' }
      ], {
        duration: 500,
        iterations: 1
      }
    );

    await delay(300);

    return this.service.deleteCard(id) .subscribe(() => {
      this.status = 'Delete successful'
      this.onGetCard();
      window.location.reload();
    })
  }
}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
