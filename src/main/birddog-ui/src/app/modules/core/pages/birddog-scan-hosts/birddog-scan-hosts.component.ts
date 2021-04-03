import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-birddog-scan-hosts',
  templateUrl: './birddog-scan-hosts.component.html',
  styleUrls: ['./birddog-scan-hosts.component.scss']
})
export class BirddogScanHostsComponent implements OnInit {

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.router.navigateByUrl("domains")
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onScanHostSelected() {
    this.router.navigateByUrl('ports')
  }
}
