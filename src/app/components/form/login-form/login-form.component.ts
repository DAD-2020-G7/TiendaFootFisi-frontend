import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements AfterViewInit {
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  @ViewChild('userInput', { static: null }) userInput: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.userInput.nativeElement.focus()
    }, 0);
  }

  hide: boolean = true;
  loginForm = this.fb.group({
    user: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private router: Router
  ) { }

  login() {
    this._userService.login(this.loginForm.controls['user'].value, this.loginForm.controls['password'].value).subscribe(
      res => {
        if (res.sTipo == 4) {
          Swal.fire(
            '¡Error!',
            `${res.sMensaje}`,
            'error'
          )
        }
        if (res.sTipo == 5) {
          Swal.fire(
            '¡Error!',
            `${res.sMensaje}`,
            'error'
          )
        }
        if (res.sCelular) {
          this.router.navigateByUrl('catalogo')
          if (localStorage.getItem('carrito')) {
            this.router.navigateByUrl('carrito');
            localStorage.removeItem('carrito')
          }
          this.Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
        }
      },
      err => { console.log(err) }
    )
  }

}
