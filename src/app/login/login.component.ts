import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginArray: any = {}
  public loginForm !: FormGroup
  users : any
  userStorage = [] 
  
  show_button: Boolean = false;
  show_eye: Boolean = false;
  
  constructor(private formBuilder : FormBuilder, private api: AuthService, private router: Router, private toastr: ToastrService) {}
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      fullName: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      isEdit: false
    })
  }
  
  login() {
    this.api.logIn(this.loginForm)
    .subscribe(res => {
      const user = res.find((a: any) => {
        return a.fullName === this.loginForm.value.fullName && a.password === this.loginForm.value.password
      })
      console.log(user);
      
      localStorage.setItem('user', JSON.stringify(user))
      
    
        
        console.log("hi");
        this.toastr.success('Login success');  
        this.router.navigate(["/home"])
        this.loginForm.reset()
      
        // alert('Something went wrong')
        // this.toastr.error('User not found')
        
     
    }, err => {
      alert('Something went wrong')
    })
  }
  
  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }  
}
