import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/Book';

@Component({
  selector: 'page-book-form',
  templateUrl: 'book-form.html',
})
export class BookFormPage implements OnInit {

  bookForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              public navCtrl: NavController,
              private booksService: BooksService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: this.formBuilder.array([])
    });
  }

  onSubmitForm() {
    let newBook = new Book(this.bookForm.get('name').value);
    for (let control of this.getDescriptionArray().controls) {
      newBook.description.push(control.value);
    }
    this.booksService.addBook(newBook);
    this.navCtrl.pop();
  }

  getDescriptionArray() {
    return this.bookForm.get('description') as FormArray;
  }

  onAddDescription() {
    let newControl = this.formBuilder.control('');
    this.getDescriptionArray().controls.push(newControl);
  }

  onRemoveDescription(index: number) {
    this.getDescriptionArray().removeAt(index);
  }

}
