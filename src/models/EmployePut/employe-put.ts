export class EmployePut {
  firstname: string | undefined;
  lastname:  string | undefined;
  email:  string | undefined;

  constructor() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
  }



  loadFromJson(jsonElement: any){
    Object.assign(this, jsonElement);
  }
}


