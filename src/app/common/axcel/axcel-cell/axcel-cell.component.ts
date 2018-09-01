import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'axcel-cell',
  templateUrl: './axcel-cell.component.html',
  styleUrls: ['./axcel-cell.component.scss']
})
export class AxcelCellComponent implements OnInit {
  @Input() controler;
  @Input() isHeader: boolean;
  @Input() dataSource;
  @Input() bind: string;

  constructor() { }

  ngOnInit() {
  }

}
