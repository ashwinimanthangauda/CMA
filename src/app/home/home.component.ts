import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //showContent: boolean = true;
  
  onHomeClick(): void {
    // Navigate to the home route to show the menu bar only
  //  this.showContent = !this.showContent;
    
  }

}
