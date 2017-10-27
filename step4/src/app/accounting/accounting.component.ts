import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {
  money = '';//金额
  billTypes = [];//记账类型

  contentStyle = {
    'overflow': 'scroll',
    'height': window.screen.availHeight - 145+'px'
  };

  constructor() {
    let n = 0;
    while(n < 20){
      this.billTypes.push({name: '食物', id: n});
      n++;
    }
  }

  ngOnInit() {
  }

}
