import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';
import { ModalTestComponent } from './modal-test.component';

@Component({
  selector: 'app-order-check',
  templateUrl: './order-check.component.html',
  styleUrls: ['./order-check.component.css']
})
export class OrderCheckComponent implements OnInit {
  currentModal;
  isConfirmLoading = false;

  constructor(private modalService: NzModalService ) { }

  showModal(){
    const modal = this.modalService.open({
      title: '简单对话框',
      content: 'I am text.',
      closable: true,
      showConfirmLoading: true,
      onOk(){
        return new Promise((resolve) => {
          console.log(resolve);
          setTimeout(resolve, 1000);
        });
      },
      onCancel(){
        alert("Cancel");
      }
    })
  }

  showModalForTemplate(tpl1, tpl2, tpl3){
    this.currentModal = this.modalService.open({
      title: tpl1,
      content: tpl2,
      footer: tpl3,
      maskClosable: false,
      onOk(){
        console.log('Click ok');
      }
    })
  }

  shouModalForComponent(){
    const subscription = this.modalService.open({
      title: '可以传递数据的对话框',
      content: ModalTestComponent,
      onOk(){

      },
      onCancel(){
        console.log("click cancel");
      },
      footer: false,
      componentParams: {
        name: '测试渲染Component'
      }
    });
    subscription.subscribe(result => {
      console.log(result);
    })
  }

  handleOk(e){
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.currentModal.destroy('onOk');
      this.isConfirmLoading = false;
      this.currentModal = null;
    }, 1000);
  }

  /* 表格部分代码 */
  data = [
    {id: 1, name: 'Jun'},
    {id: 2, name: 'Jun'},
    {id: 3, name: 'Jun'},
    {id: 4, name: 'Jun'},
    {id: 5, name: 'Jun'},
    {id: 6, name: 'Jun'},
    {id: 7, name: 'Jun'}
  ];
  copyData = [...this.data];

  /* 编辑表格中的数据 */
  edit(obj) {
    const editModal = this.modalService.open({
      title: '表格内容修改',
      content: ModalTestComponent,
      onOk(){
      },
      onCancel(){
        console.log("click cancel");
      },
      footer: false,
      componentParams: {
        name: '测试渲染Component'
      }
    });
    editModal.subscribe(result => {
      console.log(result);
    })
  }

  del(obj) {
    console.log(obj);
    this.data.splice(obj, 1);
    /* var idNum = obj.id;
    this.data.splice(idNum, 1);

    console.log(this.data); */
    // console.log(obj.parentNode);
  }

  //刷新表格
  reset(){
    var befo = this.data;
    console.log(befo);
    this.data = [];
    console.log(this.data);
    this.data = befo;
    console.log(this.data);
  }

  ngOnInit() {
  }

  list = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    }
  ];

  dl(obj){
    console.log(obj);
    this.list.splice(obj, 1);
  }

}
