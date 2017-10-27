import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  //进入页面选中子组件的一个tab
  activeIndex = 1;

  constructor() { }

  ngOnInit() {
  }

  setActive(i){
    this.activeIndex = i;
  }

}
