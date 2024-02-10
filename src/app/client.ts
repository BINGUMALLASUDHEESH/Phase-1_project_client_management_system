export class Client {
    id:number=0
    client_name:string=""
    client_email:string=""
    client_adress:string=""
    client_password:string=""

    constructor(id:number,name:string,email:string,adress:string,password:string) {
        this.id=id
        this.client_name=name
        this.client_email=email
        this.client_adress=adress
        this.client_password=password

    }
}
