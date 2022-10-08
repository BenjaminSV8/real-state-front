import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-orchestation',
  templateUrl: './orchestation.component.html',
  styleUrls: ['./orchestation.component.scss']
})
export class OrchestationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.detectDevice();
  }

  @HostListener('window:resize', ['$event'])
  onOrientationChange() {
    this.detectDevice();
  } 
  detectDevice() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
          // true for mobile device
          console.log("mobile device");
          localStorage.setItem('kep.dvc', '1');
      }else{
          // false for not mobile device
          localStorage.setItem('kep.dvc', '0');
          console.log("not mobile device");
      }
  }
}
