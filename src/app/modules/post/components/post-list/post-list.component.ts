import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  @Input()
  posts: Post[] = [];

  @Output()
  removePostEvent = new EventEmitter<number>();

  removePost(id: number): void {
    this.removePostEvent.emit(id);
  }

  trackByFn(item: any): any {
    return item.id;
  }
}
