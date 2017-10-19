import { Component, OnInit } from '@angular/core';
import {Http, Jsonp, Headers, HttpModule} from '@angular/http';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  /* 如果不使用rxjs来请求数据，很多方面需要自己来处理，比较麻烦 */
  public list: any[];
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http,
    private jsonp: Jsonp
  ) { }

  ngOnInit() {
  }

  requestData(){
    var _that = this;
    // alert('请求数据');
    var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    this.http.get(url).subscribe(function (data) {
      // console.log(data['_body'])
      console.log(JSON.parse(data['_body']));
      var list = JSON.parse(data['_body']);
      console.log(list['result']);
      _that.list = list['result'];
    }, function(err){
      console.log(err);
    });
  }

  requestJsonpData(){
    // jsonp必须在URL后面加上 &callback=JSONP_CALLBACK
    var _that = this;
    var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK";
    // var url="http://127.0.0.1:3000/news?&callback=JSONP_CALLBACK";

    this.jsonp.get(url).subscribe(function(data){
      // console.log(data);
      console.log(data['_body']);
      // _that.list =data['_body'];
    });
  }

  postData(){
    // 1.导入 Headers定义请求头
    // 2.创建headers的私有方法    private headers
    // 3.post提交数据
    // var url = 'http://127.0.0.1:3000/dologin';
    // this.http.post(url,
    //   JSON.stringify({'username': 'zhangsan', 'age': '20'}),
    //   {headers: this.headers}).subscribe(function() {
    //     console.log(data);
    //   },function(err){
    //     console.log(err);
    //   })
    // )
  }

  /* 请求的本地服务是通过nodejs来搭建的 */

}
