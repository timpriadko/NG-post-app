import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { HomepageComponent } from './modules/home/home.component';
import { SinglePostPageComponent } from './modules/post/components/single-post-page/single-post-page.component';
import { PostPageComponent } from './modules/post/post.component';

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
      { path: ':id', component: SinglePostPageComponent },
      // { path: 'error', component: ErrorPageComponent },
      // { path: '**', redirectTo: '/error' },
    ],
  },

  // {
  //   path: 'posts',
  //   loadChildren: () =>
  //     import(`./modules/post/post.module`).then((m) => m.PostModule),
  // },

  // { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
