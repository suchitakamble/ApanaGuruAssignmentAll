import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  h2Title = 'This is project name';
  h1Title = 'This is My name';
  title = 'Student-Management-System';
  a = 2;
  b = 10;
  html = '<strong>Suchita Kamble</strong>';
  ifMouseOver = false;

  getFullName(): string {
    return 'Suchita Kamble';
  }

  buttonClicked(event: any): void {
    alert('You clicked me...');
  }

  onMouseOver(event: any): void {
    this.ifMouseOver = true;
  }

  onMouseOut(event: any): void {
    this.ifMouseOver = false;
  }

  studentList = [
    {
      name: 'Suchita Kamble',
      gender: 'female',
      Dob: '24-10-2000',
      percentage: 70
    },
    {
      name: 'Pratiksha Madane',
      gender: 'female',
      Dob: '12-01-1999',
      percentage: 80
    },
    {
      name: 'Pratiksha Mule',
      gender: 'female',
      Dob: '09-03-2002',
      percentage: 90
    }
  ];

  hasPermission = false;

  toggleHasPermission(event: any): void {
    this.hasPermission = !this.hasPermission;
  }

  num1 = 20;
  num2 = 50;

  student = {
    userName: '',
    DOB: '',
    userMobile: '',
    userEmail: ''
  };

  bgcolor = 1; // Example variable for ngClass

 currentDate = new Date();
 currentDate1 = new Date();
 currentDate2 = new Date();
 currentDate3 = new Date();


 heading ="This is HEADING"

}
