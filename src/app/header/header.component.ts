import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuOptionFired = new EventEmitter<string>();
  @Input() activeView: string;
  constructor() { }

  ngOnInit() {
  }

  setView(view) {
    this.menuOptionFired.emit(view);
  }
}
