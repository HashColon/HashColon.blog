import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BlogPageComponent } from '@blog/page/blog-page.component';
import { PageFormat } from '@blog/services/page-format';

@Component({
  selector: 'blog-wysiwyg',
  templateUrl: './wysiwyg.component.html',
  styleUrls: ['./wysiwyg.component.scss']
})
export class WysiwygComponent implements OnInit {
  //@ViewChild('codemirrorEditorView') codeEditorView: ElementRef;
  @ViewChild(BlogPageComponent) pageView: BlogPageComponent;

  editor: PageFormat = {
    header: {
      title: '', topic: [], tags: [],
      datetime: new Date()
    },
    content: ''
  };

  titleControl: FormControl;
  topicControl: FormControl;
  tagsControl: FormControl;
  dateControl: FormControl;
  contentControl: FormControl;

  constructor() {
  }

  ngOnInit(): void {
    this.titleControl = new FormControl();
    this.topicControl = new FormControl();
    this.tagsControl = new FormControl();
    this.contentControl = new FormControl();
    this.dateControl = new FormControl();
  }

  _editTitle() {
    this.editor.header.title = this.titleControl.value;
  }

  _editTags() {

  }

  _editTopic() {

  }

  _editContent() {
    this.editor.content = this.contentControl.value;
  }

  testEditorContent(e) {

  }
}
