import { Component } from '@angular/core';
import { RESTAPIService } from '../../services/RESTAPIService/restapiservice.service';
import { NgFor } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-get-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './get-card.component.html',
  styleUrl: './get-card.component.scss'
})
export class GetCardComponent {
  data: any = '';
  status: any = '';

  constructor(private service: RESTAPIService) {}

  ngOnInit(): void {
    this.onGetCard();
  }

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

    await delay(400);

    return this.service.deleteCard(id) .subscribe(() => {
      this.status = 'Delete successful'
      this.onGetCard();
    })
  }
}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
