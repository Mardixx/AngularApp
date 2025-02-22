import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  
  public getCards() {
    let url = `http://page-allergy.gl.at.ply.gg:21180/card`;
    return this.http.get(url);
  }

  public deleteCard(id: number) {
    let url = "http://page-allergy.gl.at.ply.gg:21180/card" + id;    
    return this.http.delete(url);
  }

  public addCard(info: any) {
    let url = "http://page-allergy.gl.at.ply.gg:21180/card";
    return this.http.post(url, info);
  }
}
