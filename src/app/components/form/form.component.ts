import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  registerForm!:FormGroup
  title = 'formvalidation';
  submitted = false;

  constructor(private formBuilder : FormBuilder){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName : ['',[Validators.required]],
      lastName : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required, Validators.minLength(3)]]
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return
    }

    alert("success")
  }
}
