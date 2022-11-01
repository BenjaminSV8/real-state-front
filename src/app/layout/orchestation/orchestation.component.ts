import { Component, HostListener, OnInit } from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { SpinnerOverlayService } from "src/app/service/spinner.service";
@Component({
  selector: "app-orchestation",
  templateUrl: "./orchestation.component.html",
  styleUrls: ["./orchestation.component.scss"],
})
export class OrchestationComponent implements OnInit {
  constructor(
    private router: Router,
    private loadingService: SpinnerOverlayService
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.setLoading(true);
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.loadingService.setLoading(false);
        }, 3000);
      }
    });
  }

  ngOnInit(): void {
    this.detectDevice();
  }

  @HostListener("window:resize", ["$event"])
  onOrientationChange() {
    this.detectDevice();
  }
  detectDevice() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      console.log("mobile device");
      localStorage.setItem("kep.dvc", "1");
    } else {
      // false for not mobile device
      localStorage.setItem("kep.dvc", "0");
      console.log("not mobile device");
    }
  }
}
