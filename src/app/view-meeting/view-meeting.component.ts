import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-meeting',
  templateUrl: './view-meeting.component.html',
  styleUrls: ['./view-meeting.component.css']
})
export class ViewMeetingComponent {
  meetings: any[] = [];
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMeetings();
  }

  fetchMeetings() {
    this.http.get('http://localhost:3000/getmeetings').subscribe(
      (response: any) => {
        console.log(response),
        console.log(response[0].name),
        this.meetings = response,
        console.log(this.meetings);
      },
      (error) => {
        console.error('Error fetching clients', error);
      }
    );
  }
}
