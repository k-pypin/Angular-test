import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service'
import { Task, TaskType } from '../task' 
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  task:Task;
  constructor(private transService:TransferService,private router:Router) { }
   public title:string;
   public description:string;
   public taskType: TaskType;
   public date: string;
   public time: string;
  ngOnInit() {
    this.task = this.transService.getData();
    this.title = this.task.title;
    this.description = this.task.description;
    this.taskType = this.task.taskType;
    
   
    this.date = this.task.date.getFullYear().toString() + '-' + (this.task.date.getMonth() + 1).toString() + '-' + this.task.date.getDate().toString();
    
    this.time = this.getFormattedTime(this.task.date);
    
    
  }

  getFormattedTime(date:Date)
  {
    var time:string = '';
    if(date.getHours() >= 10)
      time = date.getHours().toString() + ':';
    else
      time = '0' + date.getHours().toString() + ':';
    
    if(date.getMinutes() >= 10)
      time += date.getMinutes().toString();
    else
      time += '0' + date.getMinutes().toString();
    return time;
  }

  editTask(title:string, description:string, taskType:TaskType, date:string, time:string)
  {
    

    console.log(date);
    this.task.title = title;
    this.task.description = description;
    this.task.taskType = taskType;
          
    this.task.date = new Date(date + ' ' + time);

    
    alert('Событие изменено');
    this.router.navigateByUrl('/');
  }

  dateChanged(NewDate:string)
  {
    this.date = NewDate;
    console.log("Date: " + this.date);
  }

  timeChanged(NewTime:string)
  {
    this.time = NewTime;
    
  }
}
