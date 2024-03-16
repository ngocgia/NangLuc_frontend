import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IPhieu } from '../models/Phieu';

@Injectable({
  providedIn: 'root',
})
export class PhieuService {
  apiurl = 'http://localhost:4000/api/phieu/';
  constructor(private http: HttpClient) {}

  getAllPhieu(): Observable<ApiResponse<IPhieu[]>> {
    return this.http.get<ApiResponse<IPhieu[]>>(`${this.apiurl}`);
  }

  getPhieu(id: string): Observable<ApiResponse<IPhieu>> {
    return this.http.get<ApiResponse<IPhieu>>(`${this.apiurl}/${id}`);
  }

  createPhieu(phieu: IPhieu): Observable<any> {
    return this.http.post(`${this.apiurl}`, phieu);
  }

  updatePhieu(id: string, phieu: IPhieu): Observable<any> {
    return this.http.put(`${this.apiurl}/${id}`, phieu);
  }

  deletePhieu(id: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.apiurl}/${id}`);
  }
}
