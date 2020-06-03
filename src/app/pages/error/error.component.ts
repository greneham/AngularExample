import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  title = "Oops! Something went wrong"
  desc = "Please contact us at ..."

  constructor() { }

  ngOnInit(): void {
  }

}
