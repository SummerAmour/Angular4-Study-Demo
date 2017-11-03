import { Component, OnInit, Input, Output } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { EventEmitter } from 'events';

@Component({
  selector: 'edit',
  template: `
    <div>
      <h4>{{info}}</h4>
      <p>可以通过Subject传递数据，修改表格内容</p>
      <nz-table #editTab [nzDataSource]="onlyData">
          <thead nz-thead>
              <tr>
                  <th nz-th><span>ID</span></th>
                  <th nz-th><span>NAME</span></th>
                  <th nz-th><span>OPERATE</span></th>
              </tr>
          </thead>
          <tbody nz-tbody>
              <tr nz-tbody-tr *ngFor="let i of editTab.data">
                  <td nz-td>{{i.id}}</td>
                  <td nz-td>
                    <span *ngIf="editRow!==i.key">{{i.name}}</span>
                    <span *ngIf="editRow===i.key">
                      <nz-input [(ngModel)]="tempEditObject[i.key].name"></nz-input>
                    </span>
                  </td>
                  <td nz-td>
                      <span *ngIf="editRow!==i.key">
                          <a (click)="edit(i)">Edit</a>
                      </span>
                      <span *ngIf="editRow===i.key">
                          <a (click)="save(i)">Save</a>
                          <span nz-table-divider></span>
                          <nz-popconfirm [nzTitle]="'Sure to cancel?'" (nzOnConfirm)="cancel(data)">
                            <a nz-popconfirm>Cancel</a>
                          </nz-popconfirm>
                      </span>
                  </td>
              </tr>
          </tbody>
      </nz-table>

      <div class="customize-footer">
      <button nz-button (click)="emitDataOutside($event)" [nzType]="'primary'">传递数据到上层</button>
      <button nz-button (click)="handleCancel($event)" [nzType]="'default'">返回</button>    
      </div>
    </div>
  `
})
export class EditComponent implements OnInit {
  info: number;
  // data = [
  //   { id: 1, name: 'Jun' },
  //   { id: 2, name: 'Jun' },
  //   { id: 3, name: 'Jun' },
  //   { id: 4, name: 'Jun' },
  //   { id: 5, name: 'Jun' },
  //   { id: 6, name: 'Jun' },
  //   { id: 7, name: 'Jun' }
  // ];
  // onlyData = {};
  onlyData;

  editRow = null;
  tempEditObject = {};

  editName;
  
  // console.log(typeof this.data);
  // console: this.data;

  // @Input()
  // set name(value: any){
  //   console.log(this.info);
  //   this.info = value;
  // }

  emitDataOutside(){
    this.subject.next(this.editName);
  }

  handleCancel(e){
    this.subject.destroy('onCancel');
  }
  
  constructor(private subject: NzModalSubject) { 
    this.subject.on('onDestory', () => {
      console.log("destory");
    })
  }

  ngOnInit() {
    this.onlyData = [
      { id: this.info, name: 'Jun' }
    ];
    console.log(this.onlyData);

    this.onlyData.forEach(item => {
      this.tempEditObject[item.key] = {};
    });
  }

  edit(data){
    this.tempEditObject[data.key] = {...data};
    this.editRow = data.key;
  }

  save(data){
    Object.assign(data, this.tempEditObject[data.key]);
    this.editRow = null;
    console.log(this.tempEditObject[data.key]);
    console.log(data);
   this.editName = data.name;
  }

  cancel(data){
    this.tempEditObject[data.key] = {};
    this.editRow = null;
  }

}
