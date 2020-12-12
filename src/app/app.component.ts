import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clientName: string; 
  clientDateOfBirth: string; 
  annualSalary: number; 

  onNameChange(name: string){
    this.clientName = name; 
  }

  onDateChange(date: string){
    this.clientDateOfBirth = date; 
  }

  onSalaryChange(amount: string){
    this.annualSalary = parseFloat(amount); 
  }
}
