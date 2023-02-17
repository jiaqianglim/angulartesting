import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-outer2wid',
  templateUrl: './outer2wid.component.html',
  styleUrls: ['./outer2wid.component.css'],
})
export class Outer2widComponent implements OnInit {
  id!: string;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }
}
