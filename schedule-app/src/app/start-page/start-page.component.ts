import { Component, OnInit } from '@angular/core';
import {Task, TaskType} from '../task'
import { TasksService } from '../tasks.service'
import { TransferService } from '../transfer.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

   public title:string;
   public description:string;
   public taskType: TaskType;
   public date: string;
   public time: string;
   searchStr = '';
   
    tasks:Task[];
    constructor(private tasksService: TasksService,private transService: TransferService,private router:Router) {   }
  
    ngOnInit() {
        
        this.tasks = this.tasksService.tasks;
        //Сохранение после изменений
        localStorage.setItem('schedule-tasks',JSON.stringify({tasks:this.tasks})); 
        
    }

    onEditClick(task:Task)
    {
      this.transService.setData(task);
      
      this.router.navigateByUrl('/edit');
    }
    addTask(title: string, description: string, taskType: TaskType, date: string,time: string):void
    {
        
        if(title == null || title.trim()=="" || description==null || description.trim()=="" || taskType == null || date == null)
            return;
                       
      
        
        
        this.tasks.push(new Task(title,description,taskType, new Date(date + ' ' + time)));
        localStorage.setItem('schedule-tasks',JSON.stringify({tasks:this.tasks})); 
       
        
    }

    onLoadClick()
    {
        this.tasksService.getDataFromServer();
        localStorage.setItem('schedule-tasks',JSON.stringify({tasks:this.tasks})); 
    }

    onDelClick(ind:number):void 
    {
        
       
        this.tasks.splice(ind,1);
        localStorage.setItem('schedule-tasks',JSON.stringify({tasks:this.tasks})); 
        
        
    }
    

}
