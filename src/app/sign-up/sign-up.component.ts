import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  formData: any;

  constructor(private _router: Router, private formDataService: FormDataService) {
    this.formData = this.formDataService.getFormData();

    this.signUpForm = new FormGroup({
      name: new FormControl(this.formData?.name, [Validators.required, Validators.minLength(3)]),
      dob: new FormControl(this.formData?.dob, [Validators.required]),
      email: new FormControl(this.formData?.email, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(this.formData?.phoneNumber, [Validators.required, Validators.pattern(/^\+?[0-9]{7,15}$/)]),
      education: new FormGroup({
        institute: new FormControl(this.formData?.education?.institute, [Validators.required, Validators.minLength(2)]),
        education: new FormControl(this.formData?.education?.education, [Validators.required]),
        percentage: new FormControl(this.formData?.education?.percentage, [Validators.required, Validators.min(0), Validators.max(100)]),
      }),
      hobby: new FormControl(this.formData?.hobby || []),
      gender: new FormControl(this.formData?.gender, [Validators.required]),
      address: new FormControl(this.formData?.address),
      summary: new FormControl(this.formData?.summary),
    });
  }

  onCheckboxChange(event: any) {
    const hobby = this.signUpForm.get('hobby');
    if (hobby) {
      const hobbyArray = hobby.value as string[];
      if (event.target.checked) {
        hobby.setValue([...hobbyArray, event.target.value]);
      } else {
        hobby.setValue(hobbyArray.filter(h => h !== event.target.value));
      }
    }
  }

  onSubmit() {
    this.formDataService.saveFormData(this.signUpForm.value);
    this._router.navigate(['/dashboard']);
  }

  onClear() {
    this.formDataService.clearFormData();
  }
  get form() {
    return this.signUpForm.controls;
  }
}
