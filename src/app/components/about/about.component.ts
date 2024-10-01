import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  skills = [
    { title: 'Angular', skills: 'Expert in building scalable and maintainable applications.' },
    { title: 'JavaScript', skills: 'The foundation of interactive and responsive web designs.' },
    { title: 'HTML/CSS', skills: 'Crafting clean, responsive interfaces that adapt to all devices.' },
    { title: 'TypeScript', skills: 'Ensuring type safety and robustness in code.' },
  ]

}
