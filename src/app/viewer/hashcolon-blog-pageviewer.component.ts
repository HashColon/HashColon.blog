import { Component, Input, OnInit, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PageManagerService } from '@blog/services/page-manager.service';
import * as PageUtil from '@blog/builder/page-manager-utility';

@Component({
  selector: 'hashcolon-blog-pageviewer',
  templateUrl: './hashcolon-blog-pageviewer.component.html',
  styleUrls: ['./hashcolon-blog-pageviewer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HashcolonBlogPageviewerComponent implements OnInit {

  @Input()
  pageSrc: string;

  content: SafeHtml;
  header: PageUtil.PageHeaderType;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private sanitizer: DomSanitizer,
    private pageMgr: PageManagerService) {
    //console.log(this.route.snapshot.url.join('/'));

  }

  getPageHeader(page: string): PageUtil.PageHeaderType {
    return PageUtil.getPageHeader(page);
  }

  getPageContent(page: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      PageUtil.getPageContent(page)
    );
  }

  ngOnInit(): void {
    this.pageMgr.getHTML(this.pageSrc)
      .subscribe(page => {
        this.header = this.getPageHeader(page);
        this.content = this.getPageContent(page);
      });
  }

}
