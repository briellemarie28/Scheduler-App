import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.css']
})
export class TomorrowComponent implements OnInit {
  "task" : string
  "completed" : boolean
  tasks = [
    {"task" : "Feed the dog"},
    {"task" : "Get to work on time"},
    {"task" : "Delete emails"},
    {"task" : "Go to the movies"}];

  @Input()
  newTomorrowTask: string;
    constructor() {
     }
     addTask() {
      this.tasks.push ({
        "task" : this.newTomorrowTask
      })
    }


  ngOnInit() {
  }
}
