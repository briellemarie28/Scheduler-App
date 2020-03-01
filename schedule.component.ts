import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
// export interface ISchedule {
//   "task" : string
//   "completed" : boolean
// }
export class ScheduleComponent implements OnInit{
  "task" : string
  "completed" : boolean
  tasks = [
    {"task" : "Morning Yoga"},
    {"task" : "Get to work on time"},
    {"task" : "Lunch with Bob"},
    {"task" : "Finish binge watching my show"}
  ];
  @Input()
  newTask: string;
    constructor() {
     }
     addTask() {
      this.tasks.push ({
        "task" : this.newTask
      })
      console.log(this.newTask)
    }
  ngOnInit() {
  }

}
