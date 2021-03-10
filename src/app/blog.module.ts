import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@blog/material.module';
import { CodemirrorEditorComponent } from './wysiwyg/codemirror-editor.component';

import { BackendConnectorModule } from '@HashColonBackend/backend-connector.module';

import { BlogRoutingModule } from '@blog/blog-routing.module';
import { HashcolonBlogHomeComponent } from '@blog/home/hashcolon-blog-home.component';
import { HashcolonBlogViewerComponent } from '@blog/viewer/hashcolon-blog-viewer.component';
import { BlogPageComponent } from '@blog/page/blog-page.component';
import { WysiwygComponent } from '@blog/wysiwyg/wysiwyg.component';


@NgModule({
  declarations: [
    HashcolonBlogHomeComponent, HashcolonBlogViewerComponent,
    BlogPageComponent,
    WysiwygComponent,
    CodemirrorEditorComponent],
  imports: [
    CommonModule, HttpClientModule,
    MaterialModule, ReactiveFormsModule,
    // HighlightModule,
    BlogRoutingModule, BackendConnectorModule

  ],
  // providers: [
  //   {
  //     provide: HIGHLIGHT_OPTIONS,
  //     useValue: {
  //       coreLibraryLoader: () => import('highlight.js/lib/core'),
  //       languages: {
  //         typescript: () => import('highlight.js/lib/languages/typescript'),
  //         css: () => import('highlight.js/lib/languages/css'),
  //         html: () => import('highlight.js/lib/languages/htmlbars')
  //       }
  //     }
  //   }
  // ]
})
export class BlogModule { }
