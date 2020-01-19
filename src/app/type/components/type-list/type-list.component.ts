import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TypeListItem } from '../../models/typelistitem';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {

  @Input() typeList: TypeListItem[];
  @Output() typeSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
