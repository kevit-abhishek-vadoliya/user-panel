import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private STORAGE_KEY = 'signUpFormData';
  
  saveFormData(formData: any) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(formData));
  }

  getFormData() {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : null;
  }

  clearFormData() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
