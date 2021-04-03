import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../app-state/customer/customer.service";

@Component({
  selector: 'app-birddog-home',
  templateUrl: './birddog-home.component.html',
  styleUrls: ['./birddog-home.component.scss']
})
export class BirddogHomeComponent implements OnInit {

  /**
   *
   * @param customerService
   */
  constructor(private customerService: CustomerService) {
    customerService.get().subscribe();
  }

  ngOnInit(): void {
  }

}
