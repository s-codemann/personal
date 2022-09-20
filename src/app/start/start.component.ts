import { Component, OnInit } from '@angular/core';
import { trigger,state,style,animate,transition,keyframes } from '@angular/animations';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=> this.showNav =true,3800)
  }
showNav:boolean =false;
}
