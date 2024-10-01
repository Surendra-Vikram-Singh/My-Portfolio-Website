import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `<div class="logo-container">
    <div class="circle">
      <span class="initials">SVS</span>
    </div>
  </div>`,
  styles: `/* Logo Container */
.logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  /* Circle for Logo */
  .circle {
    width: 150px;
    height: 150px;
    background-color: #007bff; /* Change this color to customize the circle */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Initials Text */
  .initials {
    font-size: 48px;
    font-weight: bold;
    color: white;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: 'Arial', sans-serif;
  }
  
  /* Hover Effect */
  .circle:hover {
    background-color: #0056b3;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, box-shadow 0.3s;
  }`
})
export class LogoComponent {

}
