import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  private appName:string = "Study1";
  private todayDate:string = new Date().toLocaleDateString();
  private nameTrial:string = "interpolation";
  private globalApp = {
    uname:'',
    pwd:''
  };
  private displayFlag:boolean = false;
  
  toggleDisplay(){
    this.displayFlag = !this.displayFlag;
  }

  changeAppName(){
    if(this.appName == "Tiwari"){
      this.appName = "Study1";
    }else{
      this.appName = "Tiwari"
    }
  }
}
