import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { HomepageComponent } from './modules/home/home.component';
import { PostPageComponent } from './modules/post/post.component';
import { SinglePostComponent } from './modules/single-post/single-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomepageComponent },
  {
    path: 'posts',
    children: [
      { path: '', component: PostPageComponent },
      { path: ':id', component: SinglePostComponent },
    ],
  },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
