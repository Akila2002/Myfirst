import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories!: any[];

  // Update the categories property with data from ProductSearchComponent
  updateCategories(data: any[]) {
    this.categories = data;
  }

  receivedData!: string;
  receiveDataFromChild(data: string) {
  this.receivedData = data;
  }  

parentmsg ='Good morning pooja';




  formdata:any={};
  submit() {
  console.log(this.formdata);
  }


movies: Movie[] =[
  {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
  {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},
  {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
  {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
  {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016'},]



last:boolean=true;




selectedColor: string='';
selectColor(color:string) {
  this.selectedColor=color;
}



}

class Movie {
  title!: string;
  director!: string;
  cast!: string;
  releaseDate!: string;
 
}


 
