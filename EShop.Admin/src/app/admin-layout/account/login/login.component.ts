import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public passwordShow: boolean = false;
  loginForm: FormGroup;
  returnUrl: string;

  constructor(private accountService: AccountService, private toastrService : ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  showPassword() {
    this.passwordShow = !this.passwordShow;
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators
        .pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      password: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    this.accountService.login(this.loginForm.value).subscribe(() => {
      this.toastrService.success("Login Successfully");
      this.router.navigate(['/admin/dashboard']);
    }, error => {
      this.toastrService.error("Login Failed");
      console.log(error);
    })
  }

}
