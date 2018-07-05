import { Injectable } from "@angular/core"
import { Task } from './task'
@Injectable()
export class TransferService {
    
    
      private task:Task;
    
      setData(task){
        this.task = task;
      }
    
      getData(){
        let temp = this.task;
        this.clearData();
        return temp;
      }
    
      clearData(){
        this.task = undefined;
      }
    

}