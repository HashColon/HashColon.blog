import { Component, OnInit } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { PageFormat } from '@blog/services/page-format';

@Component({
  selector: 'blog-wysiwyg',
  templateUrl: './wysiwyg.component.html',
  styleUrls: ['./wysiwyg.component.scss']
})
export class WysiwygComponent implements OnInit {

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

  //view: PageFormat;

  constructor() {
    //this.view = this.editor;
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
