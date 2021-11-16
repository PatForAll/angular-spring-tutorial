import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'anup.kumar@luv2code.com', 50000),
    new SalesPerson('John', 'Doe', 'jd@unknown.org', 10000),
    new SalesPerson('Mai', 'Truong', 'mt@somemail.net', 25000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
