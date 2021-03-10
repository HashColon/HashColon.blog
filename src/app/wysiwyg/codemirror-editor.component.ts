import { Component, OnInit, Renderer2, Input, Output, EventEmitter } from '@angular/core';

import { EditorView } from "@codemirror/view";
import { EditorState, Transaction } from "@codemirror/state";
import { lineNumberMarkers, lineNumbers } from "@codemirror/gutter";
import { history, redo, redoSelection, undo, undoSelection } from "@codemirror/history";
import { foldCode, unfoldCode, foldGutter } from "@codemirror/fold";
import { html } from "@codemirror/lang-html";
import { defaultHighlightStyle } from "@codemirror/highlight";
import { standardKeymap, indentSelection } from "@codemirror/commands";
import { bracketMatching } from "@codemirror/matchbrackets";
import { closeBrackets } from "@codemirror/closebrackets";
import { autocompletion } from "@codemirror/autocomplete";
import { linter } from "@codemirror/lint";
import { basicSetup } from "@codemirror/basic-setup";
import { oneDark } from "@codemirror/theme-one-dark";


@Component({
  selector: 'blog-codemirror-editor',
  templateUrl: './codemirror-editor.component.html',
  styleUrls: ['./codemirror-editor.component.scss']
})
export class CodemirrorEditorComponent implements OnInit {

  @Input() code: string;
  @Output() codeChange = new EventEmitter<string>();

  //div: ElementRef;
  codemirror: EditorView;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // this.div = this.renderer.createElement("_codemirrorViewer");
    //this.renderer.
    this.codemirror = new EditorView({
      state: EditorState.create({
        doc: this.code,
        extensions: [
          basicSetup,
          lineNumbers(), history(), foldGutter(),
          html(), /*linter(),*/
          defaultHighlightStyle,
          bracketMatching(), closeBrackets(),
          oneDark
        ]
      }),
      dispatch: (tr: Transaction) => {
        this.codemirror.update([tr]);
        this.codeChange.emit(this.codemirror.state.doc.toString());
      }
    });

    this.renderer.appendChild(
      this.renderer.selectRootElement('#main'), this.codemirror.dom);
  }

  test() {
    console.log(this.code);
  }

}
