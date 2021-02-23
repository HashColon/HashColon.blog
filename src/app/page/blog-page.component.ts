import { Component, OnInit, Input } from '@angular/core';
import { PageFormat } from '@blog/services/page-format';

@Component({
  selector: 'blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  @Input() page: PageFormat;

  constructor() { }

  ngOnInit(): void {
  }

}

// export interface PageHeaderType {
//   title?: string;
//   datetime?: Date;
//   topic?: string[];
//   tags?: string[];
//   filepath?: string;
// }
