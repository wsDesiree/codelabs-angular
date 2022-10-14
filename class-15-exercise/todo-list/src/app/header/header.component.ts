import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  show: boolean = false;
  @Output() displayPage = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  showTasklist() {
    this.displayPage.emit('tasklist');
    console.log('Tasklist');
  }

  showCompletedTasks() {
    this.displayPage.emit('completedtasks');
    console.log('Completedtasks');
  }
}
