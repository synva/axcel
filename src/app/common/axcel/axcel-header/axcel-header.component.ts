import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'axcel-header',
  templateUrl: './axcel-header.component.html',
  styleUrls: ['./axcel-header.component.scss']
})
export class AxcelHeaderComponent implements OnInit {
  @Input() controler;
  @Input() width: number;
  @Input() dataSources;
  @Input() bind: string;

  constructor() { }

  ngOnInit() {
  }

}
