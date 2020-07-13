import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {IPost} from "../post";
import {Observable} from "rxjs";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  postList: IPost[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
   this.postService.getPosts().subscribe(next => (this.postList = next),
        error => (this.postList = []));
  }

  // deletePost(i: number) {
  //   this.postService.deletePost(i).subscribe(next => (this.postList = next),
  //     error => (this.postList = []));
  // }
}
