import { Component, OnInit, Input, Renderer2, ElementRef, AfterViewChecked } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PageFormat } from '@blog/services/page-format';
import * as PageUtil from '@blog-builder/page-manager-utility';

declare let hljs;


@Component({
  selector: 'blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit, AfterViewChecked {

  @Input() page: PageFormat;

  constructor(
    public sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private element: ElementRef,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    hljs.highlightAll();
  }

  _getDateTimeString(date: Date): string {

    return PageUtil.getDateString(date, "MMM.dd.yyyy(ddd) hh:mm");


    // console.log(date.toDateString() + "/\n" + date.toISOString() + "/\n" +
    //   date.toLocaleDateString() + "/\n" + date.toLocaleString() + "/\n" +
    //   date.toLocaleTimeString() + "/\n" + date.toString() + "/\n" +
    //   date.toTimeString() + "/\n" + date.toUTCString() + "/\n");



    // return date.toDateString() + "/\n" + date.toISOString() + "/\n" +
    //   date.toLocaleDateString() + "/\n" + date.toLocaleString() + "/\n" +
    //   date.toLocaleTimeString() + "/\n" + date.toString() + "/\n" +
    //   date.toTimeString() + "/\n" + date.toUTCString() + "/\n";

  }
}
