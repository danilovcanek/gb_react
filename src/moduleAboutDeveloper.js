export class AboutDeveloper{
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }
  showInfo(){
    console.log(this.name, this.surname);
  }
}