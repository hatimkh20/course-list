import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseItem } from './course/models/courseItem.model';
import { State } from './reducers';
import { NgForm } from '@angular/forms';
import { AddCourseItemAction } from './course/actions/course.action';
import { AddBookItemAction } from './books/actions/book.action';
import { BookItem } from './books/models/bookItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  courseItems$: Observable<CourseItem[]>;
  bookItems$: Observable<BookItem[]>;
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.courseItems$ = this.store.select((store) => store.courseList.courses);
    this.bookItems$ = this.store.select(store => store.bookList.books);
  }

  addCourse(form: NgForm) {
    this.store.dispatch(new AddCourseItemAction(form.value));
    form.reset();
  }

  addBook(form: NgForm) {
    this.store.dispatch(new AddBookItemAction(form.value));
    form.reset();
  }

}