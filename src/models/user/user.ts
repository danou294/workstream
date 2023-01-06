export class User {
  username: string | undefined;
  password:  string | undefined;

  constructor() {
    this.username = '';
    this.password = '';
  }

  loadFromJson(jsonElement: any){
    Object.assign(this, jsonElement);
  }

}
