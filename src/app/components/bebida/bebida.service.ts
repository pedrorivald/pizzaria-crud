import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient} from '@angular/common/http';
import { Bebida } from './bebida.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BebidaService  {

  baseUrl = 'http://localhost:3001/bebidas';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false) :void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(bebida: Bebida): Observable<Bebida>{
    return this.http.post<Bebida>(this.baseUrl, bebida).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  read(): Observable<Bebida[]>{
    return this.http.get<Bebida[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  readById(id: number): Observable<Bebida> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Bebida>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      );
    }

  update(bebida: Bebida): Observable<Bebida>{
    const url = `${this.baseUrl}/${bebida.id}`;
    return this.http.put<Bebida>(url, bebida).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      );
    }
    
    delete(id: number): Observable<Bebida>{
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete<Bebida>(url).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
        );
      }

    errorHandler(e: any): Observable<any>{
      this.showMessage('Ocorreu um erro!', true);
      return EMPTY;
    }
}
