import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { PageManagerService } from '@blog/services/page-manager.service';
import { PageFormat } from '@blog/services/page-format';
import * as PageUtil from '@blog-builder/page-manager-utility';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-hashcolon-blog-viewer',
  templateUrl: './hashcolon-blog-viewer.component.html',
  styleUrls: ['./hashcolon-blog-viewer.component.scss']
})
export class HashcolonBlogViewerComponent implements OnInit {

  @ViewChild('topiclist') TopicList: MatSelectionList;
  @ViewChild('pagelist') PageList: MatSelectionList;
  @ViewChild('topicnav') TopicNav: MatSidenav;
  @ViewChild('pagenav') PageNav: MatSidenav;

  blogHeaderList = "assets/blog/blog-header.json"
  topics: string[];
  pages: string[];
  links: any;

  pageSource: string;
  pageContent: PageFormat;

  selectedTopic: number = 0;
  selectedPage: number = 0;

  isNewpageMode: boolean = false;

  constructor(
    private pageMgr: PageManagerService
  ) {
    this.pageContent = { header: {}, content: '' };
    this.pageMgr.getHTML(this.blogHeaderList)
      .subscribe(obj => {
        console.log(obj);
        var pageHeader = JSON.parse(obj);

        this.links = pageHeader;

        this.topics = Object.keys(pageHeader);
        this.selectedTopic = 0;
        this.pages = Object.keys(this.links[this.topics[this.selectedTopic]]);
        this.selectedPage = 0;

        this.pageMgr.getHTML(this.links[this._selectedTopic()][this._selectedPage()])
          .subscribe(obj => {
            this.pageContent.header = PageUtil.getPageHeader(obj);
            this.pageContent.content = PageUtil.getPageContent(obj)
          });

      });
  }


  ngOnInit(): void {

  }

  _selectedTopic(): string {
    return this.topics[this.selectedTopic];
  }

  _selectedPage(): string {
    return this.pages[this.selectedPage];
  }

  _topicSelected(change: MatSelectionListChange): void {

    this.selectedTopic = this.topics.indexOf(change.option.value);
    console.log(change.option.value, this.selectedTopic);
    this.pages = Object.keys(this.links[change.option.value]);

    this.selectedPage = 0;

    this.pageMgr.getHTML(this.links[this._selectedTopic()][this._selectedPage()])
      .subscribe(obj => {
        this.pageContent.header = PageUtil.getPageHeader(obj);
        this.pageContent.content = PageUtil.getPageContent(obj)
      });
  }

  _pageSelected(change: MatSelectionListChange): void {
    this.selectedPage = this.pages.indexOf(change.option.value);
    console.log(change.option.value, this.selectedPage);

    this.pageMgr.getHTML(this.links[this._selectedTopic()][this._selectedPage()])
      .subscribe(obj => {
        this.pageContent.header = PageUtil.getPageHeader(obj);
        this.pageContent.content = PageUtil.getPageContent(obj)
      });
  }
}
