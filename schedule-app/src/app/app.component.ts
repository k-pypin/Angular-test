import {Component} from '@angular/core'
import { TasksService } from './tasks.service';
import { TransferService } from './transfer.service';




@Component({
    selector: 'schedule-app',
    templateUrl: './app.component.html',
    providers: [TasksService, TransferService]
})
export class AppComponent{
    
}