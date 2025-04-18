import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  form!: FormGroup;
  
  list_one = [
    {
      time: '5AM-7AM',
      title: 'Early',
      subtitle: 'Rock, Eclectic, Variety Mix',
      artist: 'Eva Walker',
    },
    {
      time: '7AM-10AM',
      title: 'Astral Plane',
      subtitle: 'Rock, Eclectic, Psychedelic, variety',
      artist: 'Hey Mr. D.J.',
    },
    {
      time: '10AM-1PM',
      title: 'Drive Time',
      subtitle: 'Rock, Eclectic, Variety Mix',
      artist: 'Evie Stokes',
    },
    {
      time: '1PM-4PM',
      title: 'Variety Mix',
      subtitle: 'Rock, Eclectic, Variety Mix',
      artist: 'Hans',
    },
  ];

  list_two = [
    {
      time: '4PM-7PM',
      title: 'Astral Plane',
      subtitle: 'Rock, Eclectic, Psychedelic, variety',
      artist: 'Hey Mr. D.J.',
    },
    {
      time: '7PM-10PM',
      title: 'Drive Time',
      subtitle: 'Rock, Eclectic, Variety Mix',
      artist: 'Evie Stokes',
    },
    {
      time: '10PM-1AM',
      title: 'Variety Mix',
      subtitle: 'Rock, Eclectic, Variety Mix',
      artist: 'Hans',
    },
    {
      time: '1AM-5AM',
      title: 'Night Show',
      subtitle: 'Rock, Eclectic, Variety Mix',
      artist: 'Reverend Dollars',
    },
  ]

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      month: new FormControl(''),
      day: new FormControl(''),
      year: new FormControl(''),
      time: new FormControl(''),
      pmval: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  navigate() {
    this.router.navigate(['/playlist']);
  }
}
