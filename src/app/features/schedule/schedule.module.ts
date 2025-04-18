import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ScheduleComponent],
  imports: [ CommonModule, FormsModule, RouterModule, SharedModule ],
  exports: [ScheduleComponent],
})
export class ScheduleModule { }
