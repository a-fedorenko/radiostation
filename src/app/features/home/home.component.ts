import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class HomeComponent implements OnInit {
  // allCourses: Course[];
  // categories: any[];
  // comments: any[];s
  // posts: any[];
  // selectedСourse: Course;
  // arrowIcon = faArrowRight;
  list = [
    {
      title: 'Al Music Genre',
      img: 'assets/home/01.png'
    },
    {
      title: 'Pop',
      img: 'assets/home/02.png'
    },
    {
      title: 'Hip Hop',
      img: 'assets/home/03.png'
    },
    {
      title: 'Rock',
      img: 'assets/home/04.png'
    },
    {
      title: 'R&B Soul',
      img: 'assets/home/05.png'
    },
    {
      title: 'Country',
      img: 'assets/home/01.png'
    },
  ];

  history = [
    {
      title: 'She Will Be Loved',
      author: 'Maroon 5',
      img: 'assets/home/09.png'
    },
    {
      title: 'Dumb Little Bug',
      author: 'Em Beihold',
      img: 'assets/home/10.png'
    },
    {
      title: 'She Will Be Loved',
      author: 'Maroon 5',
      img: 'assets/home/09.png'
    },
    {
      title: 'Dumb Little Bug',
      author: 'Em Beihold',
      img: 'assets/home/10.png'
    },
  ]

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    // this.getCourses();
    // this.categories = categories;
    // this.comments = comments;
    // this.posts = posts;
  }
}
