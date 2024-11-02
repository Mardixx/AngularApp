import { Component } from '@angular/core';
import { RESTAPIService } from '../../services/RESTAPIService/restapiservice.service';
import { FormsModule, NgForm } from '@angular/forms';
import { error } from 'console';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './post-card-component.component.html',
  styleUrl: './post-card-component.component.scss'
})
export class PostCardComponent {
  status: any = '';
  classChange: boolean = true;
  hideButtonText: string = "Hide Form";

  constructor(private service: RESTAPIService) {}

  postCard(info: NgForm) {
    console.log(info.value.genres);
    let genres: string = info.value.genres;
    info.value.genres = genres.split(",")
    return this.service.addCard(info.value).subscribe(() => {
      this.status = 'Post succesful'
      console.log(this.status);
      window.location.reload();
    })
  }
  changeClass() {
    this.classChange = !this.classChange;
    if (this.hideButtonText == "Hide Form") {
      this.hideButtonText = "Show Form";
    } else {
      this.hideButtonText = "Hide Form";
    }
  }
}
