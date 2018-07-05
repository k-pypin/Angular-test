import { Task, TaskType } from "./task"
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable()
export class TasksService{
     private localData = localStorage.getItem('schedule-tasks') ? JSON.parse(localStorage.getItem('schedule-tasks')).tasks : [];
     tasks:Task[] = [];
     private serverPath:string = "./assets/tasks.json";
        constructor(private http: HttpClient)
        {
            this.getData();
        }

     getData()
     {
        console.log(this.localData.length);
        for(var i = 0; i < this.localData.length;i += 1)
        {
            this.tasks.push(new Task(this.localData[i].title,this.localData[i].description,this.localData[i].taskType,new Date(this.localData[i].date)));
        }
        return this.tasks;
     }

     getDataFromServer()
     {
        
        return this.http.get(this.serverPath).subscribe(value => {
                for(var i = 0; i < value['tasks'].length; i+=1)
                {
                    this.tasks.push(new Task(value['tasks'][i]['title'],value['tasks'][i]['description'],value['tasks'][i]['taskType'],new Date(value['tasks'][i]['date'])))
                }
                localStorage.setItem("schedule-tasks",JSON.stringify({tasks:this.tasks}))
        },error => {

        });
     }
}