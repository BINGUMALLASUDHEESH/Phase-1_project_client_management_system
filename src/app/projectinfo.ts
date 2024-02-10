export class Projectinfo {
    id:number=0
    projectName:string=""
    projectDuration:string=""
    clientid:number=0

    constructor(id:number,name:string,duration:string,cliid:number) {
        this.id=id
        this.projectName=name
        this.projectDuration=duration
        this.clientid=cliid
    }
}
