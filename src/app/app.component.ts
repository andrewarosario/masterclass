import { Component, signal } from '@angular/core';
import { PostFormComponent } from './post-form/post-form.component';
import { Post } from './models/post';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, PostFormComponent, PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posts = signal<Post[]>([]);

  addPost(post: Post) {
    this.posts.update((value) => [...value, post]);
  }
}
