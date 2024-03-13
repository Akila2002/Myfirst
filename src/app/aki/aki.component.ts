import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-aki',
  templateUrl: './aki.component.html',
  styleUrls: ['./aki.component.css']
})
export class AkiComponent implements OnInit{
  akila !:FormGroup;
  constructor(private service:ApiService,private fb:FormBuilder) 
  {
    this.akila=this.fb.group ({
      name:[''],
      password:[''],
      email:[''],
      phonenum:[''],
      state:['']
    })
  }

  ngOnInit(): void {}
    postData (data:any) {
      this.service.postData(this.akila.value).subscribe (res=> {
        console.log(res);
        alert("successfully");
      });
    }

  }
  

