import { Component } from '@angular/core';

@Component({
  selector: 'app-akila',
  templateUrl: './akila.component.html',
  styleUrls: ['./akila.component.css']
})
export class AkilaComponent {
  
  onSubmit(aki:{value:any;})
   {
  console.log(aki.value);
  }

}