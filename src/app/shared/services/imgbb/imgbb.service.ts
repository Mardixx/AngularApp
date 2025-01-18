import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImgbbService {
  private readonly apiKey: string = 'this is where the apikey is supposed to be';

  constructor(private readonly httpClient : HttpClient) { }

  upload(file : File): Observable<string> {
    const formData = new FormData();

    formData.append("image", file);

    console.log(formData);    

    let response = this.httpClient
    .post('/upload', formData, { params: { key: this.apiKey} })
    .pipe(map((response: any) => response['data']['url']));

    return response;
  }
}
