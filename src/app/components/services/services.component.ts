import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  services = [
    {service_desc:'I offer tailored web development services designed to meet your specific needs, from sleek designs to robust applications. As a freelancer, I bring flexibility and dedication to each project, ensuring you get the best results.',
      services:[
        {title:'Custom Web Development',desc:'Bringing your unique ideas to life with bespoke web solutions.'},
        {title:'Frontend Development',desc:'Expertise in Angular and JavaScript to create responsive and high-performance applications.'},
        {title:'Website Optimization',desc:'Ensuring your site is fast, reliable, and delivers a seamless user experience.'},
        {title:'Consulting & Maintenance',desc:'Need advice or updates for your existing projects? I’m here to help keep your digital presence fresh and efficient.'},
      ]
    }
  ]
}
