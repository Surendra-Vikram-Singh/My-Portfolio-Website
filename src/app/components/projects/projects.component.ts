import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    { title: 'Library Management System (Singapore Polytechnic)', 
      description: 'Developed a system for managing library resources, featuring user and admin modules.',
      technologies:['Angular', 'HTML', 'CSS', 'JavaScript'],
      key_feature:'Responsive design, real-time updates, user-friendly interface'
    },
    { title: 'E-Education Portal', 
      description: 'Built a platform for online education services, helping users access learning materials seamlessly.',
      technologies:['Angular', 'HTML', 'CSS', 'JavaScript'],
      key_feature:'Mobile-friendly, intuitive dashboard, efficient performance.'
    },
    { title: 'Flexiloans Leads', 
      description: 'Improved and optimized an existing web platform to enhance speed and performance.',
      technologies:['Angular','TypeScript'],
      key_feature:'Enhanced load times, optimized user interaction.'
    },
    { title: 'E-Education Portal', 
      description: 'A comprehensive platform for online education, enabling students to learn at their own pace.',
      technologies:['Angular','TypeScript'],
      key_feature:'Enhanced load times, optimized user interaction.'
    },
  
  ]
}
