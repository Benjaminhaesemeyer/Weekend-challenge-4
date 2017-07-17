import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
//Content array with a initial object entry
content = [
];
//Created two properties that are form fields, and ar ebond to ngModels
name:string = '';
comment:string = '';
// Created a method for adding Content
addContent(value:any) {
this.content.push({'name': value.name, 'comment': value.comment });
// Clearing both form input fields
this.name = '';
this.comment = '';
}
//counter property
likeCounter:number = 0;

incrementLikes(){
    this.likeCounter += 1;
  }

viewCounter:number = 0;
  incrementViews(){
      this.viewCounter += 1;
    }


//Created a method for deleting Content
removeContent(content) {
this.content.splice(content, 1);
}

//show and hide comments function
IsHidden= true;

onSelect(){
 this.IsHidden= !this.IsHidden;
}

}
