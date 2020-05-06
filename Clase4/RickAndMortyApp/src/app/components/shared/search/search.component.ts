import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from 'src/app/interfaces';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filters: Filter = new Filter();
  @Output() onChangeFilter = new EventEmitter<Filter>();

  constructor() { }

  ngOnInit() {
  }

  changeFilter(){
    this.onChangeFilter.emit(this.filters);
  }

}
