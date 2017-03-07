import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  myList=[
    {
      id:1,
      txt: 'a'
    },
    {
      id:2,
      txt:'b'
    },
    {
      id:3,
      txt:'c'
    },
    {
      id:4,
      txt:'d'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
