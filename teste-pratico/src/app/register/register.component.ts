import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  clientForm = this.fb.group({
    cpf: [null, Validators.required],
    name: [null, [Validators.required, Validators.minLength(3)]],
    email: [null, Validators.email],
    tel: [null],

    // address: {
    postalCode: [null, [Validators.required]],
    number: [null, Validators.required],
    addressDetails: [null],
    street: [null, Validators.required],
    neighbourhood: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    // },
  });

  get name() {
    return this.clientForm.get('name');
  }
  get cpf() {
    return this.clientForm.get('cpf');
  }
  get postalCode() {
    return this.clientForm.get('postalCode');
  }
  get number() {
    return this.clientForm.get('number');
  }
  get street() {
    return this.clientForm.get('street');
  }
  get neighbourhood() {
    return this.clientForm.get('neighbourhood');
  }
  get city() {
    return this.clientForm.get('city');
  }
  get state() {
    return this.clientForm.get('state');
  }

  success: Boolean = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.clientForm);
    if (!this.clientForm.valid) {
      this.success = true;
      this.clientForm.reset();
    }
  }
}
