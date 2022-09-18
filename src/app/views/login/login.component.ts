import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  img: string = '../../assets/image/img/earth.png';
  imgLogo: string = '../../assets/image/img/Kepler.png';
  formLogins: FormGroup;
  device: boolean = false;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    const dvc = localStorage.getItem('kep.dvc');
    this.device = dvc === '0' ? true : false
    this.formLogins = this.fb.group({
      user: new FormControl(''),
      password: new FormControl('')
    });
  }

  // @HostListener('window:storage', ['$event'])
  // storage(event: Event): void {
  //   const dvc = localStorage.getItem('kep.dvc')  ? true : false;
  //   if (dvc !==  this.device) {
  //     this.device = dvc;
      
  //   }
  // }


  login() {
    const payload = {user: this.formLogins.value.user, password: this.formLogins.value.password, gethash: true};
    this.auth.login(payload).subscribe(
      (data: any) => {
        console.log(data);
        sessionStorage.setItem('csjt', data.token);
        this.router.navigate(['/home']);
      }, (e) => {
        console.log(e);
      }
    );

  }
}
