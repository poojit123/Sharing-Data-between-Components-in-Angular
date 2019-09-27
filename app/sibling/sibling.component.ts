import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  des:any;
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

}
