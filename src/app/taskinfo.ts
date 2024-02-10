export class Taskinfo {
    id:number=0
    taskName:string=""
    taskDescription:string=""
    projectid:number=0

    constructor(id:number,name:string,description:string,proid:number){
        this.id=id
        this.taskName=name
        this.taskDescription=description
        this.projectid=proid
    }
}
