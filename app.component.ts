import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:any={};
  onSubmit(){
    alert(JSON.stringify(this.data) )
  }
 
}
