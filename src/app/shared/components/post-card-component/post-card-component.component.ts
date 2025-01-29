import { Component } from '@angular/core';
import { RESTAPIService } from '../../services/RESTAPIService/restapiservice.service';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { ImgbbService } from '../../services/imgbb/imgbb.service';

@Component({
  selector: 'app-post-card',
  imports: [FormsModule, NgClass, CommonModule, ReactiveFormsModule],
  templateUrl: './post-card-component.component.html',
  styleUrl: './post-card-component.component.scss',
  standalone: true
})
export class PostCardComponent {
  imgURL: string = '';
  status: any = '';
  classChange: boolean = true;
  hideButtonText: string = "Hide Form";

  constructor(private service: RESTAPIService, private readonly imgbbService: ImgbbService) {}

  onInput(e: Event) {
    let input = e.target as HTMLInputElement;

    if (input.files) {
      this.imgbbService.upload(input.files[0]).subscribe(url => this.imgURL = url);
    }
  }

  postCard(info: NgForm) {
    let genres: string = info.value.genres;
    info.value.genres = genres.split(",")
    console.log(genres);

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
