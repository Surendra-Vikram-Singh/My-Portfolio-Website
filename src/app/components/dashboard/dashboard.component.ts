import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  title: string = 'Welcome to My Portfolio!';
  introduction: string = 'Hi, I\'m Surendra Vikram Singh, a passionate Frontend Developer & Freelancer based in Noida, India.';
  mission: string = 'With over three years of experience in crafting elegant and responsive web applications, I specialize in turning ideas into digital realities.';
  
}
