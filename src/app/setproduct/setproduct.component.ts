import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.scss']
})
export class SetproductComponent implements OnInit {
  
  toggleField: string;

  constructor() { }

  ngOnInit(): void {
    this.toggleField = "searchMode";
  }

  toggle(filter?){
    if (!filter) { filter = "searchMode" }
    else { filter = filter; }
    this.toggleField = filter;
  } 

}
