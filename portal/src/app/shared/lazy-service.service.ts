import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LazyService {
  constructor(private httpClient: HttpClient) { }

  requestGet(url: string, headers?: any): Observable<any> {
    return this.httpClient.get<any>(url, headers);
  }

  requestPost(url: string, body: any, headers?: any): Observable<any> {
    return this.httpClient.post<any>(url, body, headers);
  }

  requestDelete(url: string, headers?: any): Observable<any> {
    return this.httpClient.delete<any>(url, headers);
  }
}
