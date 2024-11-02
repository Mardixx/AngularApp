import { Component } from '@angular/core';
import { RESTAPIService } from '../../services/RESTAPIService/restapiservice.service';
import { NgFor } from '@angular/common';

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
  onDeleteCard(id: number) {
    return this.service.deleteCard(id) .subscribe(() => {
      this.status = 'Delete successful'
      window.location.href = "/"; 
    })  
  }
}
