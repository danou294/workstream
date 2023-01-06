export class Employee {
  id : number | undefined
  num : number | undefined
  firstname: string | undefined;
  lastname:  string | undefined;
  email:  string | undefined;
  age : string | undefined
  validated: boolean | undefined

  constructor() {
    this.id = 0;
    this.num = 0;
    this.firstname = '';
    this.lastname = '';
    this.age = '';
    this.validated = false;
  }




  loadFromJson(jsonElement: any){
    Object.assign(this, jsonElement);
  }
}
