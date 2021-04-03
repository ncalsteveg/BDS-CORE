import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ScanHost} from "../../../app-state/scan-host/scan-host.model";
import {ScanHostQuery} from "../../../app-state/scan-host/scan-host.query";

@Component({
  selector: 'app-birddog-scan-host-ports',
  templateUrl: './birddog-scan-host-ports.component.html',
  styleUrls: ['./birddog-scan-host-ports.component.scss']
})
export class BirddogScanHostPortsComponent implements OnInit {

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.router.navigateByUrl("hosts")
  }


  scanHost: ScanHost | null = null;

  constructor(private router: Router,
              private scanHostQuery: ScanHostQuery) {

    if (scanHostQuery.hasActive()) {
      this.scanHost = this.scanHostQuery.getActive() as ScanHost
    }
  }

  ngOnInit(): void {
  }

}
