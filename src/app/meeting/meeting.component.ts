import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
  
})
export class MeetingComponent implements OnInit {

  name:string='';
  topic:string='';
  numberofpeople:number=0;
  startdate:string='';
  message:string='';
  constructor(private http:HttpClient) { }
  
  
  ngOnInit(): void {
  }
  addMeeting(){
    const Meeting={
      name:this.name,
      topic:this.topic,
      numberofpeople:this.numberofpeople,
      startdate:this.startdate,
    };


    this.http.post('http://localhost:3000/addMeeting',Meeting)
    .subscribe((response:any)=>
    {this.message=response.message,
      this.resetForm()},
    (error)=>{console.error('Error adding the meeting',error);}
  );
}

resetForm() {
  this.name = '';
  this.topic = '';
  this.numberofpeople = 0;
  this.startdate = '';
}

}
