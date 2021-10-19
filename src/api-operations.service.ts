import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiOperationsService {

  private host = "127.0.0.1";
  private port = '8080';
  private url = `http://${this.host}:${this.port}/directory`;
  constructor(private http: HttpClient) { }

  getTree(){
    return this.http.get(this.url);
  }

  searchTree(path:string){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, { directory: path});
  }
}
