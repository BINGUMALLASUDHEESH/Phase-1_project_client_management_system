export class Meeting {
    id: number=0;
    meetingTopic: string="";
    numberOfPersons: number=0;
    startDateTime: string="";
    clientId: number=0;
    status: string="";

    constructor(id:number,meeting:string,noofp:number,date:string,cid:number,status:string){
        this.id=id
        this.meetingTopic=meeting
        this.numberOfPersons=noofp
        this.startDateTime=date
        this.clientId=cid
        this.status=status
    }

}
