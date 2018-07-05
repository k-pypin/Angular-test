import { Pipe, PipeTransform } from "@angular/core";



@Pipe(
    {
        name: "search",
        pure: false
    }
)
export class SearchPipe implements PipeTransform{
    transform(tasks, value)
    {
        return tasks.filter(task => {
            return task.title.toLowerCase().includes(value.toLowerCase())
        });
    }
}