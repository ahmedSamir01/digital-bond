import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  topics = ["single", "married", "widowed", "divorced", "separated"];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleSubmit() {
    this.router.navigate(['/thanking']);
  }
}
