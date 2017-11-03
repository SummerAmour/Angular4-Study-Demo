import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-table-basic',
  templateUrl: `./put-in-out.component.html`,
  styles: []
})
export class PutInOutComponent implements OnInit {
  data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }
  ];

  del(i){
    this.data.splice(i, 1);
    console.log(this.data);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
