import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() baseUrl :string;
  @Input() numPages :number;
  @Input() currentPage :number;

  pages = []

  prevUrl = ''
  prevDisabled = true
  nextUrl = ''
  nextDisabled = true

  constructor() {}

  ngOnInit(): void { }

  update(): void {

    this.pages = []

    for(var i = 1; i <= this.numPages; i++) {
      this.pages.push({
        number: i,
        url: `${this.baseUrl}/${i}`
      })
    }

  	this.prevUrl = `${this.baseUrl}/${this.currentPage - 1}`;
  	this.nextUrl = `${this.baseUrl}/${this.currentPage + 1}`;

  	this.prevDisabled = this.currentPage <= 1
  	this.nextDisabled = this.currentPage >= this.numPages  	
  }

  ngOnChanges(changes) {
    this.update()
  }
}
