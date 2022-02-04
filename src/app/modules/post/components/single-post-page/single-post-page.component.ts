import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { Post, PostService } from '../../services/post.service';

@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.scss'],
})
export class SinglePostPageComponent implements OnInit {
  currentLang: string = this.translate.currentLang;

  post$!: Observable<Post>;

  error = '';

  constructor(
    private postService: PostService,
    public translate: TranslateService,
    private route: ActivatedRoute
  ) {
    translate.use(this.currentLang);
  }

  ngOnInit(): void {

    // console.log(this.route.snapshot.paramMap);

    const currentPostId: number = parseInt(this.route.snapshot.params.id);

    const currentPost$ = this.postService.getPostById(currentPostId);

    const post$ = this.postService.getPostById(currentPostId).pipe(
      tap((res) => {
        console.log(res);
      })
    );

    this.post$ = post$;
  }
}
