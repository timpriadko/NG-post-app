import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Post, PostService } from './services/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostPageComponent implements OnInit {
  currentLang: string = this.translate.currentLang;
  currentHeadline = 'Headline';
  headline: string = '';
  fetchedPosts: Post[] = [];
  error = '';

  constructor(
    private postService: PostService,
    public translate: TranslateService
  ) {
    translate.use(this.currentLang);
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  changeHeadline(newHeadline: string): void {
    this.currentHeadline = newHeadline;
  }

  fetchPosts(): void {
    this.postService.fetchPosts().subscribe(
      (posts) => {
        this.fetchedPosts = posts;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  removePost(id: number): void {
    this.postService.removePost(id).subscribe(() => {
      this.fetchedPosts = this.fetchedPosts.filter((post) => post.id !== id);
    });
  }

  trackByFn(item: Post): number {
    return item.id;
  }
}
