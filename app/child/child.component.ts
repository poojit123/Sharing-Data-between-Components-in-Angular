import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  heading:any = "From Child";
  des:any;
  @Input () title:string;

  @Output() messageEvent = new EventEmitter<string>();
  constructor(private sharedService:SharedService) { }

  ngOnInit() {
    this.sharedService.currentSearch.subscribe(data=>{
      console.log(data);
      this.getData(data);
    });
  }

  getData(id){
    this.sharedService.getPostDetails(id).subscribe(data=>{
      this.des = data.body;
    });
  }

  change(data){
    this.messageEvent.emit(this.heading);
    this.sharedService.changeSearch(data);
  }

}
