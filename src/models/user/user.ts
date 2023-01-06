export class User {
  public password: string | undefined;
  public username: string | undefined;



  constructor() {
    this.username = '';
    this.password = '';
  }
  loadFromJson(jsonElement: any){
    Object.assign(this, jsonElement);
  }

  setUsername(username: string | undefined) {
    this.username = username;

  }

  setPassword(password: string) {
    this.password = password;
  }

  getUsername(){
    return this.username
  }

  getPassword(){
    return this.password
  }
}
