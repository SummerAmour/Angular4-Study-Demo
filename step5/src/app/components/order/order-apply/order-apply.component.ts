import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-apply',
  templateUrl: './order-apply.component.html',
  styleUrls: ['./order-apply.component.css']
})
export class OrderApplyComponent implements OnInit {
  validateForm: FormGroup;

  _submitForm(){
    for(const i in this.validateForm.controls){
      this.validateForm.controls[i].markAsDirty();
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this. validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ]
    })
  }

}
