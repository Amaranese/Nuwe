import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Present } from '../models/present.model';

@Component({
  selector: 'app-regalo',
  templateUrl: './regalo.component.html',
  styleUrls: ['./regalo.component.css']
})
export class RegaloComponent implements OnInit {

  @Input() presents: Present [] = []; 

  @Output() onViewDetails = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

}
