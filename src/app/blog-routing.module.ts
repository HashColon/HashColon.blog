import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HashcolonBlogHomeComponent } from '@blog/home/hashcolon-blog-home.component';
import { HashcolonBlogViewerComponent } from '@blog/viewer/hashcolon-blog-viewer.component';
import { WysiwygComponent } from '@blog/wysiwyg/wysiwyg.component';


const routes: Routes = [{
  path: 'blog',
  //redirectTo: '/blog/viewer', pathMatch: 'full',
  children: [
    { path: 'home', component: HashcolonBlogHomeComponent },
    { path: 'viewer', component: HashcolonBlogViewerComponent },
    { path: 'newpage', component: WysiwygComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
