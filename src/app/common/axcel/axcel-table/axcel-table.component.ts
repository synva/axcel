import { Component, OnInit, Input, QueryList, ViewChild, ContentChildren, ElementRef } from '@angular/core';
import { AxcelColumnComponent } from '../axcel-column/axcel-column.component';

@Component({
  selector: 'axcel-table',
  templateUrl: './axcel-table.component.html',
  styleUrls: ['./axcel-table.component.scss']
})
export class AxcelTableComponent implements OnInit {
  @Input() ruler: string;
  @Input() headerHeight: number;
  @Input() dataSources;

  @ViewChild('headerScroll') private headerScroll: ElementRef;
  @ViewChild('rulerScroll') private rulerScroll: ElementRef;
  @ViewChild('bodyScroll') private bodyScroll: ElementRef;

  @ContentChildren(AxcelColumnComponent) columns: QueryList<AxcelColumnComponent>;

  controler: AxcelTableControler;

  constructor() {
    this.controler = new AxcelTableControler();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // let topleft = this.headerFixed.nativeElement.querySelectorAll('.axcel-ruler-header')[0];
    // console.log(topleft.clientWidth);
    // let ruler = this.rulerScroll.nativeElement.querySelectorAll('.axcel-ruler-header')[0];
    // console.log(ruler.clientWidth);

    let index = 0;
    this.columns.forEach(column => {
      column.dataSources = this.dataSources;
      column.controler = this.controler;
      column.index = index;
      index++;
    });
  }

  onScroll() {
    this.headerScroll.nativeElement.scrollLeft = this.bodyScroll.nativeElement.scrollLeft;
    this.rulerScroll.nativeElement.scrollTop = this.bodyScroll.nativeElement.scrollTop;
  }

}

export class AxcelTableControler {

}
