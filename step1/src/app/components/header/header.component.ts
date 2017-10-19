import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = '这是一个头部组件';
  msg: any;

  constructor() { }

  ngOnInit() {
    this.msg = 'This is an angular msg.';
  }

}
