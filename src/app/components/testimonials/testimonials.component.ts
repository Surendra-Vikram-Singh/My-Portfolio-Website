import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  review = [
    { client:'Manav Parihar', company:'Tata Consultancy', message: "Working with Surendra was a fantastic experience. He delivered exactly what we envisioned, a fast, responsive, and visually appealing site. Highly recommend!" },
    {client:'Surendra Singh', company:'Infosys Pvt Ltd', message:"Surendra went above and beyond to optimize our web app, improving both functionality and performance. His skills are top-notch!"}
    
  ]
}
