import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder,FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  contactForm !:FormGroup;
  constructor(private service:ApiService,private fb:FormBuilder)
  {
    this.contactForm=this.fb.group ({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]]
    })
  }

  ngOnInit(): void {}
    postData (data: any) {
      this.service.postData(this.contactForm.value).subscribe (res=> {
        console.log (res);
        alert("submitted successfully");
      })
    }
  }