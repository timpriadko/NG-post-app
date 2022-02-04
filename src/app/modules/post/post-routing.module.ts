import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../../core/error-page/error-page.component';
import { SinglePostPageComponent } from './components/single-post-page/single-post-page.component';
import { PostPageComponent } from './post.component';

const routes: Routes = [
  {
    path: '',
    component: PostPageComponent,
    children: [
      { path: ':id', component: SinglePostPageComponent },
      //   { path: 'error', component: ErrorPageComponent },
      //   { path: '**', redirectTo: '/error' },
    ],
  },
  // { path: '/:id', component: SinglePostPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
