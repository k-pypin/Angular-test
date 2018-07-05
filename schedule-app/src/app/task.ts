export enum TaskType {Job = "Job", Home = "Home", Family = "Family", None = "None"};

export class Task {
    title: string;
    description: string;
    taskType: TaskType;
    date: Date;
    constructor(title: string, description: string, taskType: TaskType, date: Date)
    {
        this.title = title;
        this.description = description;
        this.taskType = taskType;
        
        this.date = date;
        
    }

}