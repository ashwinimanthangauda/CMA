import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {
  clients: any[] = [];
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients() {
    this.http.get('http://localhost:3000/getclients').subscribe(
      (response: any) => {
        this.clients = response;
      },
      (error) => {
        console.error('Error fetching clients', error);
      }
    );
  }
}
