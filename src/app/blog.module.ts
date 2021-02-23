import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@blog/material.module';

import { BlogRoutingModule } from '@blog/blog-routing.module';
import { HashcolonBlogHomeComponent } from '@blog/home/hashcolon-blog-home.component';
import { HashcolonBlogViewerComponent } from '@blog/viewer/hashcolon-blog-viewer.component';
import { HashcolonBlogPageviewerComponent } from '@blog/viewer/hashcolon-blog-pageviewer.component';
import { BlogPageComponent } from '@blog/page/blog-page.component';
import { WysiwygComponent } from '@blog/wysiwyg/wysiwyg.component';

@NgModule({
  declarations: [
    HashcolonBlogHomeComponent, HashcolonBlogViewerComponent,
    HashcolonBlogPageviewerComponent, BlogPageComponent,
    WysiwygComponent],
  imports: [
    CommonModule, HttpClientModule,
    MaterialModule,
    BlogRoutingModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
