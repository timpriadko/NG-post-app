import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { MenuItem, MenuItems } from 'src/app/shared/components/header/model/menu';
import { Post, PostService } from '../post/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  currentLang: string = this.translate.currentLang;
  menuItems: MenuItem[] = MenuItems;

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

    const currentPostId: number = parseInt(this.route.snapshot.params.id);

    const currentPost$ = this.postService.getPostById(currentPostId);

    const post$ = currentPost$;

    this.post$ = post$;
  }

  trackByFn(item: any): any {
    return item.id;
  }
}
