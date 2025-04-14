import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true
})
export class PlaylistComponent implements OnInit {
  form!: FormGroup;
  
  list = [
    {
      time: '03:37 PM',
      title: 'Watching Cartoons',
      subtitle: 'La Luz & Adrian Younge',
      artist: 'La Luz',
      album: '2021 - Hardly Art',
      img: 'assets/playlist/01.jpg',
      desc: 'We loved it when Deltron 3030 performed this song live at The Triple Door as part of KEXP\'s VIP Club concert'
    },
    {
      time: '12:29 AM',
      title: 'Hey Mr. DJ (original mix)',
      subtitle: 'Zhane',
      artist: 'Hey Mr. D.J.',
      album: '1993 - Epic',
      img: 'assets/playlist/02.jpg',
      desc: 'De La Soul\'s Sweet Dreams is featured as the B-side to 4 More which features R&B duo Zhané.'
    },
    {
      time: '01:54 AM',
      title: 'Funk Gets Stronger, Part 1',
      subtitle: 'Funkadelic, Sly Stone',
      artist: 'Hey Mr. D.J.',
      album: '1981 - Warner Bros. Records',
      img: 'assets/playlist/03.jpg',
      desc: 'Greg Errico is best known as the drummer for Sly and the Family Stone. \'The Electric Spanking of War Babies\' is the twelfth studio album by the American funk rock band Funkadelic.'
    },
    {
      time: '01:33 AM',
      title: 'Positive Contact',
      subtitle: 'Deltron 3030',
      artist: 'Deltron 3030',
      album: '2000 - 75 Ark',
      img: 'assets/playlist/04.jpg',
      desc: 'Deltron 3030 is the hiphop trio made up of Handsome Boy Modeling School\'s Dan the Automator, as the Cantankerous Captain Aptos, rapper Del the Funky Homosapien, as Deltron Zero/Deltron Osiris, and DJ Kid Koala, as Skiznod the Boy Wonder.'
    },
    {
      time: '01:18 AM',
      title: 'Song of Sophia',
      subtitle: 'Dead Can Dance',
      artist: 'The Serpent\’s Egg',
      album: '1994 - 4AD, Warner Bros. Records',
      img: 'assets/playlist/05.jpg',
      desc: 'Sampled in The Chemical Brothers\' Song to the Siren. Off of Australian band Dead Can Dance\'s fourth studio album \'The Serpent\'s Egg.\''
    },
  ]

  constructor(
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
}
