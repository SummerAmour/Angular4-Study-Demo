import { Component, OnInit, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';

@Component({
  selector: 'demo-modal',
  template: `
    <div>
        <h4>{{_name}}</h4>
        <br/>
        <p>可以通过Subject传递数据</p>
        <div class="customize-footer">
            <button nz-button [nzType]="'primary'" [nzSize]="'large'" (click)="emitDataOutside($event)">
            传递数据到上层
            </button>
            <button nz-button [nzType]="'default'" [nzSize]="'large'" (click)="handleCancel($event)">
            返 回
            </button>
        </div>
    </div>
  `
})
export class DemoComponent implements OnInit {
    _name: string;

    @Input()
    set name(value: string){
        this._name = value;
    }

    emitDataOutside(){
        this.subject.next('传出数据');
    }

    handleCancel(e){
        this.subject.destroy('onCancel');
    }    

  constructor(private subject: NzModalSubject) {
      this.subject.on('onDestory', () => {
          console.log('destroy');
      })
   }

  ngOnInit() {
  }

}
