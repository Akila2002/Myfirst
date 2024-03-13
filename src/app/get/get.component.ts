import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
responseData:any;
constructor(private dataservice:ApiService){}
ngOnInit(): void {
this.getData();
}
getData() {
  this.dataservice.getData().subscribe((res)=> {
  this.responseData=res;
  });
}
}
