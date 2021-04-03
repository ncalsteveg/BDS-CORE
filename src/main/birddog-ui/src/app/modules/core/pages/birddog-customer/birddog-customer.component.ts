import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-birddog-customer',
  templateUrl: './birddog-customer.component.html',
  styleUrls: ['./birddog-customer.component.scss']
})
export class BirddogCustomerComponent {


  constructor(private router: Router) {
  }

  /**
   * Display the jobs for the customer
   */
  onCustomerSelected(): void {
    this.router.navigateByUrl('jobs')
  }
}
