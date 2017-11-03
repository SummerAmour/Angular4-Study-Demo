import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';
import { ModalTestComponent } from './modal-test.component';
import { EditComponent } from './edit.component';

@Component({
  selector: 'app-order-check',
  templateUrl: './order-check.component.html',
  styleUrls: ['./order-check.component.css']
})
export class OrderCheckComponent implements OnInit {
  currentModal;
  isConfirmLoading = false;

  searchValue = '';

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
    {id: 1, name: 'Jun1'},
    {id: 2, name: 'Jun2'},
    {id: 3, name: 'Jun3'},
    {id: 4, name: 'Jun4'},
    {id: 5, name: 'Jun5'},
    {id: 6, name: 'Jun6'},
    {id: 7, name: 'Jun7'}
  ];
  copyData = [...this.data];

  /* 编辑表格中的数据 */
  edit(obj) {
    const editModal = this.modalService.open({
      title: '编辑表格',
      content: EditComponent,
      onOk(){
      },
      onCancel(){
        console.log("click cancel");
      },
      footer: false,
      componentParams: {
        info: obj.id
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
    // window.reload=] = ‘’；

    /* 刷新表格 */
    this.reset();
  }

  //刷新表格
  reset(){
    // var befo = this.data;
    // console.log(befo);
    // this.data = [];
    // console.log(this.data);
    // this.data = befo;
    // console.log(this.data);

    // console.log("原表格data：" + this.data);
    console.log(this.data);
    // console.log(this.copyData);
    // console.log("copy表格copyData："+this.copyData);

    const filterFunc = (item) => {
      return (item.name.indexOf(this.searchValue) !== -1);
    };
    this.data = [...this.copyData.filter(item => filterFunc(item))];
    // this.data.filter(item => filterFunc(item));
    console.log(this.data);

    // const filterFunc = (item) => {
    //   return (item.name.indexOf(this.searchValue) !== -1);
    // };
    // this.data = [...this.copyData.filter(item => filterFunc(item))];
  }

  ngOnInit() {
  }

}
