import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-list-use',
  templateUrl: './list-use.component.html',
  styleUrls: ['./list-use.component.css']
})
export class ListUseComponent implements OnInit {
  public username: any = '';
  public list = [];

  //依赖注入服务
  constructor(
    private storage: StorageService
  ) { }

  ngOnInit() {
    //每次刷新的时候，显示存储的list值
    var list = this.storage.getItem('list');
    if(list){
      this.list = list;
    }
  }

  addData(event){
    // console.log(event);
    // alert(this.username);
    /* 将输入的username添加到一个数组中，并显示到页面上 */
    // this.list.push(this.username);
    /* 添加键盘事件，使得用户敲回车键都能添加username */
    if(event.keyCode == 13){
      /*每次增加一个对象数据*/
      var obj = {
        username: this.username,
        status: 1
      };

      /*判断浏览器中是否存有数据，如果有数据拿到这个数据，然后将新数据和原本存储的数据拼接*/
      var listUse = this.storage.getItem('list');
      if(listUse){
        listUse.push(obj);
        //将新数据进行拼接
        this.storage.setItem('list', listUse);
      }else{
        //如果没有数据，直接写入存储中
        var arr = [];
        arr.push(obj);
        this.storage.setItem('list', arr);
      }

      this.list.push(obj);
      // this.list.push(this.username);
      this.username = "";
    }
  }

  delete(obj){
    // console.log(obj);
    this.list.splice(obj, 1);
    // console.log(this.list[obj].username)
  }

  changeData(obj){
    // console.log(this.list[obj])
    if(this.list[obj].status == 1){
      this.list[obj].status = 2;
    }else{
      this.list[obj].status = 1;
    }
    this.storage.setItem('list', this.list);
  }
}
