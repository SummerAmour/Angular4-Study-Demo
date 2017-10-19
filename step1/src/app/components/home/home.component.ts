import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public msg: any;
  public username: string;
  student: string = "Student";
  public flag: any;

  public search: any;
  public id = '00001';
  public html = "";

  //循环
  public list = [];
  public list2: any[];
  public list3: any[];

  constructor() {
    this.msg = "I am a home component.";
    this.username = 'Lily';
    this.flag = true;
    this.search = "我是十万个为什么...";
    this.html = "<h4>我是一个有标签的标题</h4>";

    this.list = ['Cake', 'Fruit'];
    this.list2 = [
      {'speaking': 'Let us singing.'},
      {'speaking': 'Let us dancing.'}
    ];
    this.list3 = [
      {
        'teacher': 'Jane',
        'student': [
          {'name': 'stu1'},
          {'name': 'stu2'},
          {'name': 'stu3'}
        ]
      },
      {'teacher': 'Empty'}
    ];
  }

  ngOnInit() {
  }

  //自定义函数
  getMsg(){
    alert(this.msg);
  }
  setName(){
    this.username = 'ChangedUsername';
  }
  keyupFn(event){
    if(event.keyCode == 13){
      alert("Suprise!!!");
    }
  }
  run(event){
    console.log(event);
  }
  getSearch(){
    alert(this.search);
  }

}
