import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  successMessage = '';
  socials=[];
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
    
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      // In a real app, you would send the form data to your backend
      console.log('Form submitted:', this.contactForm.value);
      this.successMessage = 'Thank you for your message! I will get back to you soon.';
      this.contactForm.reset();
      this.submitted = false;
      
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    }
  }
}
