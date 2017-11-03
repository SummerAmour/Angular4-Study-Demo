import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-accurate-check-turn',
  templateUrl: './accurate-check-turn.component.html',
  styleUrls: ['./accurate-check-turn.component.css']
})
export class AccurateCheckTurnComponent implements OnInit {

  validateForm: FormGroup;

  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
  }

  get isHorizontal() {
    return this.validateForm.controls['formLayout'] && this.validateForm.controls['formLayout'].value === 'horizontal';
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      formLayout: ['horizontal'],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

}
