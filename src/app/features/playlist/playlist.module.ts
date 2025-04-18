import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PlaylistComponent } from './playlist.component';


@NgModule({
  declarations: [PlaylistComponent],
  imports: [ FormsModule, RouterModule, SharedModule, ReactiveFormsModule ],
  exports: [PlaylistComponent],
})
export class PlaylistModule { }
