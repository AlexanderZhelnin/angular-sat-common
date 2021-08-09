import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
//import { LoginService } from '../Login/login.service';

@Injectable()
export class SvgService
{
  //public url: string;
  public svg$ = new BehaviorSubject<string[]>([]);

  // constructor(private http: HttpClient, private login: LoginService)
  // {
  //   this.url = window.location.href.substr(0, window.location.href.indexOf(":", 7)) + ":5015";
  // }

  // public BrowseSVGs(): Observable<string[]> { return this.http.get<string[]>(this.url + "/Browse/BrowseSVGs"); }
}
