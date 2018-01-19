import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  level:number;
  levels:Array<number>=[];
  constructor() { }
  
  onSubmit(){
    this.levels.push(this.level);
    console.log("Zdarowa Rebeata!")
    console.log(this.level);
    console.log(this.levels);
  }
  ngOnInit() {
  }

}
