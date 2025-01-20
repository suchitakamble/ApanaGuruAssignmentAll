import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-server';
}
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  private subject = new Subject<any>();
  private behaviorSubject = new BehaviorSubject<any>('Initial Value');

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API

  constructor(private http: HttpClient) {}

  // Observable to emit data
  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  // BehaviorSubject to manage shared state
  getBehaviorSubject(): Observable<any> {
    return this.behaviorSubject.asObservable();
  }

  updateBehaviorSubject(value: any): void {
    this.behaviorSubject.next(value);
  }

  // Fetch data from API
  fetchData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        return of({ error: 'Failed to fetch data' });
      })
    );
  }

  // Add new data to API
  addData(newData: any): Observable<any> {
    return this.http.post(this.apiUrl, newData).pipe(
      catchError((error) => {
        console.error('Error adding data:', error);
        return of({ error: 'Failed to add data' });
      })
    );
  }
}
